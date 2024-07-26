import React, {useEffect, useState} from 'react';
import './assets/styles/default.css';
import {Container} from "./components/styles/Container.styled";
import {Article} from "./components/article/Article";
import {Comment} from "./components/comment/Comment";
import {Loader} from "./components/loader/Loader";
import {ArticleModel, CommentModel, LoadingFlags} from "./lib/models";
import {ThemeProvider} from "styled-components";
import {StyledButton} from "./components/styles/Button.styled";

function App(): JSX.Element {
  // Theme colors for styled components
  const theme = {
    primaryColor: "#595959",
    secondaryColor: "#b3b3b3",
    backgroundColor: "#FFFFFF",
    accentColor: "#178282",
  }

  // Loading flag for each object to display the content when it's ready
  // Doesn't like the idea of having object with three attributes, but according to the assignment, only the app.tsx is responsible for loading data
  // For better scaling would love to separate these fetches into more components
  const [loading, setLoading] = useState<LoadingFlags>({
    article: false,
    comments: false,
    moreComments: false
  })

  // States for article and comments
  // Due to the using of only single state for comments, additional flag is needed to determine if all comments are loaded
  const [article, setArticle] = useState<ArticleModel>({
    author: "",
    date: "",
    text: ""
  })
  const [comments, setComments] = useState<CommentModel[]>([])
  const [allCommentsLoaded, setAllCommentsLoaded] = useState<boolean>(false)

  // Load comments
  // Simulating a delay of 2 seconds (easy counting)
  const fetchComments = async () => {
    setLoading((prev) => ({...prev, comments: true}))
    try {
      const response = await new Promise<CommentModel[]>(resolve =>
        setTimeout(() => resolve((window as any).document.__comments), 2000)
      );
      setComments(response);
    } catch (error: any) {
      // Basic error message
      // For more advanced project would be good to implement some notification store with useNotification hook
      // that could provide for example addNotification() function
      // Example usage instead alert: addNotification(type: "error", message: "Error while fetching.....")
      alert("Error fetching comments: " + error.message)
    } finally {
      setLoading((prev) => ({...prev, comments: false}))
    }
  }

  // Load more comments
  // Simulating a delay of 2 seconds (easy counting)
  // Appending the new comments to the existing ones and setting the flag to true (due to the single comments state)
  const fetchMoreComments = async () => {
    setLoading((prev) => ({...prev, moreComments: true}))
    try {
      const response = await new Promise<CommentModel[]>(resolve =>
        setTimeout(() => resolve((window as any).document.__moreComments), 2000)
      );
      setComments((prevComments) => [...prevComments, ...response]);
      setAllCommentsLoaded(true)
    } catch (error: any) {
      // Same basic error message, see the suggestion of error handling in the fetchComments
      alert("Error fetching comments: " + error.message)
    } finally {
      setLoading((prev) => ({...prev, moreComments: false}))
    }
  }

  // Load article
  // Simulating a delay of 2 seconds (easy counting)
  // chaining the fetchComments after the article is fetched
  // Cleaning the articles in the begining for better testing experience
  const fetchArticle = async () => {
    setComments([])
    setAllCommentsLoaded(false)
    setLoading((prev) => ({...prev, article: true}))
    try {
      const response = await new Promise<ArticleModel>(resolve =>
        setTimeout(() => resolve((window as any).document.__article), 2000)
      );
      setArticle(response);
      fetchComments();
    } catch (error: any) {
      // Same basic error message, see the suggestion of error handling in the fetchComments
      alert("Error fetching article: " + error.message)
    } finally {
      setLoading((prev) => ({...prev, article: false}))
    }
  }

  // Hook with callback to fetch the article (and then comments) when the app is mounted
  // No more dependencies to watch needed... I think :)
  useEffect(() => {
    fetchArticle()
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* Conditionally rendering articles and comments if they are loaded. The loader is just a ternary operator wrapped into single component. */}
        <Loader loading={loading.article}>
          <Article
            author={article?.author}
            date={article?.date}
            text={article?.text}
          />
        </Loader>
        {/* Sorting the comments directly in JSX. For bigger project, definitely suggesting creating own function for it */}
        <Loader loading={loading.comments}>
          {comments
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map(({ id, author, date, text }) => (
              <Comment
                key={id}
                author={author}
                date={date}
                text={text}
              />
            ))}
        </Loader>
        {/* Rendering the button only if comments are loaded and hiding it again if all comments are loaded */}
        {
          (comments.length > 0 && !allCommentsLoaded) && <StyledButton onClick={fetchMoreComments}>Load more comments</StyledButton>
        }
        <Loader loading={loading.moreComments}></Loader>
      </Container>
    </ThemeProvider>
  )
}

export default App;
