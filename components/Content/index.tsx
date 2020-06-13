import React, { useState, useEffect } from 'react';
import { Container, MovieContainer, PosterImage, Votes } from './styles';
import api from '../../services/api';
import { FlatList, StyleSheet, ActivityIndicator, View } from 'react-native';

function Content() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const imageUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect(()=>{
        async function getMovies(){
            const response = await api.get(`/discover/movie?&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
            setMovies(response.data.results);
            setIsLoading(false);
        }
        getMovies();
    },[])
    
    function Item({ item }){
        return (
            <MovieContainer key={item.id}>
                <Votes>{item.vote_average}</Votes>
                <PosterImage source={{uri: imageUrl+item.poster_path}} />
            </MovieContainer>
        )
    }

    const styles = StyleSheet.create({
        list: {
            height: '118.5%',
        },
        listContent: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 10
        }
    });


    async function getMovies(){
        const response = await api.get(`/discover/movie?&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page+1}`);
        setMovies(movies.concat(response.data.results));
        setIsLoading(false);
        setPage(page+1);
    }
    
    function handleLoadMore(){
        setIsLoading(true);
        if(!isLoading){
            console.log('loading more movies...');
            getMovies();
        }
    }

    function renderFooterLoading(){
        return (
            isLoading?
            <View style={{alignItems: 'center', marginTop: 10}}>
                <ActivityIndicator size="large" />
            </View>
            :null
        );
    }

    return (
        <Container style={{shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1}}>
            <FlatList
                data={movies} 
                renderItem={({item}) => <Item item={item} />}
                style={styles.list}
                contentContainerStyle={styles.listContent}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.0000000001}
                ListFooterComponent={renderFooterLoading}
            />
        </Container>
     );
}

export default Content;