import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Helmet } from "react-helmet";


import "./App.css";

function App() {
    return (
      <>
        <Helmet>
          <title>CI/CD | Mirage</title>
          <meta name="description" content="Building apps using server commands on github actions" />
          {/**
           * add the following meta data for the website to be indexed by search engines
           * - mfaseehuddin
           * - LUMS
           * - LUMS University
           * - Shaheer Sarfaraz
           * - Shaheer
           * - Faseeh
           * - Muhammad Faseeh Ud Din
           * - Muhammad Faseeh
           * - LUMS Course Planner
           * - LUMS Course Planner App
           * - LUMS Course Planner Website
           * - LUMS Course Scheduler
           * - LUMS Course Scheduler App
           * 
           * - CI/CD
           * - Continuous Integration
           * - Continuous Deployment
           * - FTP
           * - FTP Deployment
           * - FTP Deployment with React
           * - FTP Deployment with React App
           * - FTP Deployment with React Website
           * - FTP Deployment with GitHub Actions
           */}

           <meta name="keywords" content="mfaseehuddin, LUMS, LUMS University, Shaheer Sarfaraz, Shaheer, Faseeh, Muhammad Faseeh Ud Din, Muhammad Faseeh, LUMS Course Planner, LUMS Course Planner App, LUMS Course Planner Website, LUMS Course Scheduler, LUMS Course Scheduler App, CI/CD, Continuous Integration, Continuous Deployment, FTP, FTP Deployment, FTP Deployment with React, FTP Deployment with React App, FTP Deployment with React Website, FTP Deployment with GitHub Actions" />
        </Helmet>
        <div className="App" style={{
          backgroundColor: "rgb(39, 40, 34)",
          color: "white",
          padding: "50px",
        }}>
            <h1>Testing CI/CD for FTP Deployment with React</h1>
            <p style={{
              marginTop: "-20px",
              color: "rgb(166, 226, 46)",
              fontSize:"20px"
            }}>Building apps using server commands on Github Actions</p>

            <div
                style={{
                    width: "100%"
                }}
            >
                <code style={{
                }}>
                    <pre style={{
                      height: "100%",
                      //enable wrapping
                      overflowX: "auto",
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                      //text align left
                      textAlign: "left",
                      //padding
                      padding: "50px",
                    }}>
{`
Log:

Shaheer and I decided to work on implementing a clear cut solution for deploying our web projects.
We had already worked on a solution for deploying our web projects using FTP, but we wanted to make it more efficient and easier to use. We went back to our corpack project to see how we could implement the same solution for our other projects. 

Here is how we did it:

  1. We created a new repository on github for our project.
  2. As we wanted to deploy the main branch of our project, we created a new branch called "main" and set it as the default branch.
  3. We set up a main.yml file in the .github/workflows folder, with the following code:
`}
<SyntaxHighlighter language="yaml" style={monokai} customStyle={{fontSize:"12px"}}>
  {`    name: Hostinger CI/CD

        on:
          push:
            branches: [ main ]
          workflow_dispatch:
        
        jobs:
          build:
        
            runs-on: ubuntu-latest
        
            strategy:
              matrix:
                node-version: [18.x]
                # See supported Node.js release schedule at https://nodejs.org/en/about/releases/
        
            steps:
            - uses: actions/checkout@v2
            - name: Use Node.js \${{ matrix.node-version }}
              uses: actions/setup-node@v2
              with:
                node-version: \${{ matrix.node-version }}
                cache: 'yarn'
        
            - run: yarn install --frozen-lockfile
            - run: yarn build --if-present
        
            - name: FTP Deploy
              uses: SamKirkland/FTP-Deploy-Action@4.1.0
              with:
                server: ftp.pro-mirage.com
                #upload only the compiled files
                local-dir: ./build/
                username: \${{secrets.ftp_username}}
                password: \${{ secrets.ftp_password }}
`}
</SyntaxHighlighter>
{`
  4. We created a new secrets in the repository settings called "ftp_username" and "ftp_password" and set their values to the username and password of our FTP account.
    
now whenever we push to the main branch, the project will be built and deployed to our FTP server, hence this is a CI/CD solution and we plan to make this solution more efficient by using a docker image to build the project and deploy it to our FTP server, in the future.
`}
                    </pre>
                </code>
            </div>
        </div>
      </>
    );
}

export default App;
