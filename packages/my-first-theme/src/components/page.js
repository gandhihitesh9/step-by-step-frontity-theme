import React from "react";
import {connect, Head} from "frontity";

const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;

    return (
        <>
        <Head>
            <title>{post.title.rendered}</title>
            <meta
              name="description"
              content={post.title.rendered}
            />
        </Head>
        <div>
            <h2>{post.title.rendered}</h2>
            <Html2React html={post.content.rendered} />
        </div>
        </>
    );
};

export default connect(Page);