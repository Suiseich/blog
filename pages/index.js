import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Mickheil Aaron D. Tayag, and I am a student from the University of the Assumption. I've loved playing video games since I was a child, particularly MMORPGs and Souls games like Elden Ring. I also enjoy listening to video game OSTs and J-pop, with an artist like Hoshimachi Suisei being one of my favorites. My favorite food is lasagna. I see myself in 5 years becoming an IT Support Specialist because it's a profession I'm truly passionate about. Having grown up loving computers, I really want to help people diagnose and fix problems with their desktops.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}