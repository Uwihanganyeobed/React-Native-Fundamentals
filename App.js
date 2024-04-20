import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  //post requests
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  //error handling
  const [error, setError]=useState("")


  const fetchData = async (limit = 10) => {
    try{
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
    setError("")
  }
  catch(error){
    console.error('error fetching data',error)
    setIsLoading(false)
    setError("Failed to fetch post list")
  }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };
  const addPost= async()=>{
    setIsPosting(true)
    try{
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody
        })
      }
    );
    const newPost= await response.json()
    setPostList([newPost, ...postList])
    setPostTitle("");
    setPostBody("");
    setIsPosting(false);
    setError("")
  }
  catch(error){
    console.error('error adding data',error)
    setError("Failed to add new post")
  }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
        
      ):(
      <>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Post title"
            value={postTitle}
            onChangeText={setPostTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Post body"
            value={postBody}
            onChangeText={setPostBody}
          />
          <Button
            title={isPosting ? "Adding..." : "Add post"}
            onPress={addPost}
            disabled={isPosting}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={postList}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            ListEmptyComponent={<Text>No Posts Found</Text>}
            ListHeaderComponent={
              <Text style={styles.headerText}>Post List</Text>
            }
            ListFooterComponent={
              <Text style={styles.footerText}>End of List</Text>
            }
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>

      </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: "#666666",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer:{
    backgroundColor: '#FFC0CB',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center"
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: 'center'
  }
});
