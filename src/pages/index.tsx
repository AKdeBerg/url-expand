import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar activeTabName={"home"} />
      <div className="mt-3 container">
        <Head>
          <title>Expand URL</title>
          <meta name="description" content="expand your urls" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="text-center">
          <h1>Welcome to Bigly</h1>
          <p className="py-0 px-3">Expand your shortend URL with Bigly. And decode the mystrious url, unleash your inner Sherlock Holmes....</p>
        </div>
        <main className="mt-5">
          <h4>Follow these simple steps to expand urls</h4>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Step #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Navigate to Import CSV page</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Step #2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Upload a CSV file containing your urls or for multiple files use zip</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Step #3
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>VOILÀ! Check your files in the output tables </strong>
                </div>
              </div>
            </div>
          </div>
        </main>


      </div>
    </>
  )
}

export default Home
