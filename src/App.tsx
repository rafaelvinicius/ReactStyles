import { useEffect, useState } from 'react';
import { Button, Titulo, Texto, ImgTest, ImgTest2, BgDiv } from './Estilos'


function App() {


  const [UrlImg, setUlrImg] = useState("");
  const [Loading, setLoading] = useState("");



  async function PegaImagem(){

    setLoading(true);

    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const jsonResult = await response.json();
    // console.log(jsonResult);

    if(jsonResult !== null){
      setLoading(false);
      setUlrImg(jsonResult[0].url);
    }

  }

  useEffect(async () => {

    PegaImagem();

  }, []);


  return (
      <>

        {Loading == true ? 'Carregando' : null}
      
        <Titulo>Titulo <span>Span</span> </Titulo>
        <Button onClick={()=>PegaImagem()}>xxxx</Button>
        <Texto color={'#F0F'} fontsize={35}>xxx asdf asdf asdf asdf asdfa ds</Texto>
        <ImgTest ImgProps={{ MaxWidth: 300 }} src={UrlImg} />
        <ImgTest2 ImgProps={{ MaxWidth: 300 }} src={UrlImg} />
        <BgDiv UrlImg={UrlImg} />
      
      </>
  );
}

export default App;
