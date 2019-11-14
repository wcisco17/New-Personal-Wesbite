exports.createPages = async function({ actions, graphql }) {
  /**
   * @name blogPost All Blog Post
   */

  const blogPost = await graphql(`
    {
      prismic {
        allBlogposts {
          edges {
            node {
              title
            }
          }
        }
      }
    }
  `)

  blogPost.data.prismic.allBlogposts.edges.forEach(postText => {
    const link = postText.node.title[0].text
      .toLocaleLowerCase()
      .split(" ")
      .join()
      .replace(/,/g, "-")
      .trimEnd()
    actions.createPage({
      path: `/blog/${link}`,
      component: require.resolve(`./src/templates/blog-post.tsx`),
      context: { keytext: postText.node.title[0].text },
    })
  })

  /**
   * @name pillfilter Categories (Pill Filter)
   */
  const pillfilter = await graphql(`
    {
      prismic {
        allBlogposts {
          edges {
            node {
              pill
            }
          }
        }
      }
    }
  `)
  pillfilter.data.prismic.allBlogposts.edges.forEach(pillText => {
    actions.createPage({
      path: `/categories/${pillText.node.pill.toLocaleLowerCase()}`,
      component: require.resolve(`./src/templates/pill.tsx`),
      context: { pill: pillText.node.pill },
    })
  })
}
