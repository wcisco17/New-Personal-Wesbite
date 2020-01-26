exports.createPages = async function({ actions, graphql }) {
  /**
   * @name blogPost All Blog Post
   */

  const blogPost = await graphql(`
    {
      allPrismicBlogpost {
        nodes {
          data {
            title {
              text
            }
          }
        }
      }
    }
  `)

  blogPost.data.allPrismicBlogpost.nodes.forEach(postText => {
    const link = postText.data.title.text
      .toLocaleLowerCase()
      .split(" ")
      .join()
      .replace(/,/g, "-")
      .trimEnd()

    actions.createPage({
      path: `/blog/${link}`,
      component: require.resolve(`./src/templates/blog-post.tsx`),
      context: { keytext: postText.data.title.text },
    })
  })

  /**
   * @name pillfilter Categories (Pill Filter)
   */
  const pillfilter = await graphql(`
    {
      allPrismicBlogpost {
        nodes {
          data {
            pill
          }
        }
      }
    }
  `)

  pillfilter.data.allPrismicBlogpost.nodes.forEach(pillText => {
    actions.createPage({
      path: `/categories/${pillText.data.pill.toLocaleLowerCase()}`,
      component: require.resolve(`./src/templates/pill.tsx`),
      context: { pill: pillText.data.pill },
    })
  })
}
