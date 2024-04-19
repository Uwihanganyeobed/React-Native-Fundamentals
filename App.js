import {View,FlatList,SectionList, Text,StyleSheet,ScrollView,StatusBar,SafeAreaView} from 'react-native'
import pokemonList from './data.json' 
import sectionData from './groupedData.json'
export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
      {pokemonList.map(pokemon=>{
        return (
          <View style={styles.card} key={pokemon.id}>
          <Text style={styles.cardText}>{pokemon.type}</Text>
          <Text style={styles.cardText}>{pokemon.name}</Text>
          </View>
        )
      })}
      </ScrollView>
     */}
     <View style={styles.scrollView}>
     {/* <FlatList
     data={pokemonList}
     renderItem={({item})=>{
      return(
        <View style={styles.card} key={item.id}>
        <Text style={styles.cardText}>{item.type}</Text>
        <Text style={styles.cardText}>{item.name}</Text>
        </View>
      
      )

     }}
     keyExtractor={(item,index)=> item.id.toString()}
     ItemSeparatorComponent={<View style={{height: 16}} />}
     ListEmptyComponent={<Text>No items Found</Text>}
     ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
     ListFooterComponent={<Text style={styles.footerText}>end of list</Text>}
       // horizontal
     /> */}

     <SectionList
     sections={sectionData}
     renderItem={({item})=>{
      return(
        <View style={styles.card}>
          <Text style={styles.cardText}>{item}</Text>
        </View>
      )
     }}
     renderSectionHeader={({section})=>(
      <Text style={styles.sectionHeaderText}>{section.type}</Text>
     )}
     ItemSeparatorComponent={()=><View style={{height: 16}} />}
     SectionSeparatorComponent={()=><View style={{height: 16}} />}

     />
     </View>

      </SafeAreaView>
    )
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  card:{
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16
  },
  cardText:{
    fontSize: 30
  },
  headerText:{
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText:{
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  sectionHeaderText:{
    backgroundColor: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
})
