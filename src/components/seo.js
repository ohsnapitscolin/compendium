import React from "react";
import { Helmet } from "react-helmet";

export default class SEO extends React.Component {
  render() {
    const {
      description = "",
      lang = "en-us",
      meta = [],
      title = "Compendium",
      author = "Colin Dunn",
    } = this.props;

    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={title}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: author || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ].concat(meta)}
      />
    );
  }
}
