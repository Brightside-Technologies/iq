import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        //console.log("PROPS", this.props["__NEXT_DATA__"].page);
        //className="has-navbar-fixed-top"
        return (
            <html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
