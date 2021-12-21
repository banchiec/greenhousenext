// import Document, { Head, Main, NextScript } from 'next/document';
// // Import styled components ServerStyleSheet
// import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//     static getInitialProps({ renderPage }) {
//         // Step 1: Create an instance of ServerStyleSheet
//         const sheet = new ServerStyleSheet();

//         // Step 2: Retrieve styles from components in the page
//         const page = renderPage((App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         );

//         // Step 3: Extract the styles as <style> tags
//         const styleTags = sheet.getStyleElement();

//         // Step 4: Pass styleTags as a prop
//         return { ...page, styleTags };
//     }

//     render() {
//         return (
//             <html>
//                 <Head>
//                     <title>CASAVERDE COSTURA</title>
//                     {/* Step 5: Output the styles in the head  */}
//                     {this.props.styleTags}
//                 </Head>
//                 <body>
//                     <Main />
//                     <NextScript />
//                 </body>
//             </html>
//         );
//     }
// }
import Document from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }
}