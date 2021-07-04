import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '../components/Post';
import Hero from '../components/Hero';
import {sortByDate} from '../utils'

export default function Home({posts}) {
  return (
    <div>
      <Hero 
      image={posts[0].frontmatter.cover_image} 
      title={posts[0].frontmatter.title}
      slug={posts[0].slug}
      />
      <div className='posts'>
        {posts.map((post, index) => <Post post={post} key={index} />)}
      </div>
      
    </div>
  )
}

export async function getStaticProps() {

  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map(fileName => {

    const slug = fileName.replace('.md','');

    const markdownWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8');
    const {data: frontmatter} = matter(markdownWithMeta);
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}
