import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body style={{    
            height: 800,
            backgroundColor: 'rgb(53, 103, 13)',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'}}>
          <Main />
          <NextScript />
          <footer style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: 'white'
          }}>
            &#169; Pesquisar CEP, 2023
          </footer>

        </body>
      </Html>
    )
  }
}

export default MyDocument