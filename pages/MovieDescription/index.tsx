import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import { Container, Description, Title, MovieTitle, Rate, ButtonBack } from './styles';
import { Linking, TouchableHighlight, Text } from 'react-native';
import Content from './components/Content';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';

function MovieDescription({ route, navigation }){
    const imageUrl = 'https://image.tmdb.org/t/p/w500';
    const { movieId } = route.params;
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        async function getMovie(){
            const response = await api.get(`/movie/${movieId}?&language=pt-BR`);
            setMovie(response.data);
        }
        getMovie();
    }, []);

    async function openHomepage(){
        const supported = await Linking.canOpenURL(movie.homepage);
        if(supported){
            await Linking.openURL(movie.homepage);
        }
    }
    return(
        <Container>
            <Header image={imageUrl+movie.backdrop_path} />
            <ButtonBack onPress={()=>navigation.goBack()}>
                <Icon name="angle-left" color={'#fff'} size={22}/>
            </ButtonBack>
            <MovieTitle>{movie.title + ' - '+ (new Date(movie.release_date).getFullYear())}</MovieTitle>
            <Rate><Icon name="star" color={"#ff0"} size={20}/> {movie.vote_average}</Rate>
            <Content>
                <Title>Sinopse:</Title>
                <Description>{movie.overview}</Description>
                
                <Title>Título original:</Title>
                <Description>{movie.original_title}</Description>
                
                <Title>Data de lançamento: </Title>
                <Description>{new Date(movie.release_date).toLocaleDateString()}</Description>

                <Title>Gêneros: </Title>
                <Description>
                    {movie.genres && movie.genres.map(gen=><React.Fragment key={gen.id}> - {gen.name}</React.Fragment>)}
                </Description>

                <Title>Homepage: </Title>
                <TouchableHighlight onPress={openHomepage}>
                    <Description color={'#00f'}>{movie.homepage}</Description>
                </TouchableHighlight>

            </Content>
        </Container>
    )
}

export default MovieDescription;