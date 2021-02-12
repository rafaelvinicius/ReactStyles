import styled from 'styled-components';

export const Button = styled.button`
    color: #F00;
    background-color: #00F;
    font-size: 20px;
    margin: 5px;
    border: none; 
    cursor: pointer; 
	-webkit-transition: all .2s ease-in-out;
	   -moz-transition: all .2s ease-in-out;
		 -o-transition: all .2s ease-in-out;
		-ms-transition: all .2s ease-in-out;
			transition: all .2s ease-in-out;
    &:hover {
        color: #00F;
        background-color: #F00;
    }
`;

export const Titulo = styled.h1`
    color: #F00;
    font-size: 20px;
    margin: 5px;
    span {
        color: #00F;
        font-size: 10px
    }
`;

export const Texto = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.fontsize+'px'};
`;

export const ImgTest = styled.img`
    width: 100%;
    display: block;
    margin: 0 auto;
    max-width: ${props => props.ImgProps.MaxWidth+'px'};
    background-size: cover;
`;

export const BgDiv = styled.div`
    background-image: url(${props => props.UrlImg});
    background-position: center center;
    width: 640px;
    height: 360px;
    margin: 0 auto;
    background-size: cover;
`;

export const ImgTest2 = styled(ImgTest)`
    max-width: 100px;
`