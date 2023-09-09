import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link';
import Head from 'next/head';
import {ImArrowLeft} from 'react-icons/im'

export default function PostPage({frontmatter: {title, date, cover_image}, slug, content}) {
    return (
        <>
            <Head>
                <title>Rodwin's Game Blog - {title}</title>
            </Head>
            <div className='card card-page'>
                <Link href='/'>
                    <a className='btn btn-back'><ImArrowLeft /> GO BACK</a>
                </Link>
                <h1 className='post-title'>{title}</h1>
                <div className='post-date'>{date}</div>
                <img className='image-detail' src={cover_image} />
                <div className='post-body'>
                    <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(fileName => ({
        params: {slug: fileName.replace('.md','')}
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');

    const {data: frontmatter, content} = matter(markdownWithMeta);
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
    
}
