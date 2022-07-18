import React, { useState } from "react";
import "./home.scss";
import Editor from "@monaco-editor/react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 100px;
  border-color: white;
`;




const url = "https://api.jdoodle.com/v1/execute";
const cors = "https://cors-anywhere.herokuapp.com/";

function Home() {
  const [state, setState] = useState({
    userCode: "",
    userLang: "cpp",
    userTheme: "vs-dark",
    fontSize: 20,
    userInput: "",
    userOuptut: "",
    loading: false,
  });
  const [textOutput, setTextOutput] = useState('Output Will Appera here');

  let program = {
    script: `${state.userCode}`,
    language: state.userLang,
    versionIndex: "0",
    clientId: "e1c77fdc02b46b3de6ee45c1a1d399b3",
    clientSecret:
      "2aceab07e7076cc88f3a14c1818e5ad8548440c0e4b34d80912b653fbdd5a95e",
    token: "",
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(program),
  };

  const handleBtn = async () => {
    try {
      setState({ loading: true });
      let res = await fetch(cors + url, requestOptions);
      let json = await res.json();
      console.log(json.output);
      setTextOutput(json.output)
      setState({ userOuptut: json });
      setState({ loading: false });
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(state.userInput)
  return (
    <div className="home">
      <div className="right">
        <Editor
          fontSize={state.fontSize}
          height="calc(100vh - 50px)"
          width="100%"
          theme={state.userTheme}
          language={'cpp'}
          defaultLanguage="cpp"
          defaultValue="// Enter your code here"
          onChange={(value) => {
            setState({ userCode: value });
          }}
        />
        <button className="btn" onClick={handleBtn}>
          Run
        </button>
      </div>
      <div className="left">
        <div className="upBox">
          <h2>Input:</h2>
          <textarea
            onChange={(e) => {
              setState({ userInput: e.target.value });
            }}
            className="textarea"
          ></textarea>
        </div>
        <div className="downBox">
          <h2>Output:</h2>
          {state.loading ? (
            <ClipLoader
              size={50}
              loading={true}
              speedMultiplier={0.5}
              color={"white"}
              css={override}
            />
          ) : (
            <textarea
                className="textarea"
                value={textOutput}
                onChange={(e)=>setTextOutput(e.target.value)}
            ></textarea>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
