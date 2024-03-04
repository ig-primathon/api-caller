import React, { useState } from "react";
import { Button, Card, Input, Space } from "antd";
import axios from "axios";

export default function APICaller() {
  const [mid, setMid] = useState("19g6ilkatpl78");
  const [environment, setEnvironment] = useState("production");
  const [type, setType] = useState("merchantInfo");
  const [storeId, setStoreId] = useState("65108476121");
  const [fbpixel, setFbpixel] = useState("807456599925510");
  const [themeId, setthemeId] = useState(164730077504);
  const [apiKey, setAPIKey] = useState("a34342b357d839dc4320");
  const [windowObject, setWindowObject] = useState({});
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const handleAddToWindow = () => {
    const ob = {
      mid: mid,
      environment: environment,
      type: type,
      storeId: storeId,
      fbpixel: fbpixel,
    };
    window.merchantInfo = ob;
    setWindowObject(ob);
  };
  const handleCallAPI = () => {
    axios
      .get(
        `https://dev-kwikpass-be.dev.gokwik.io/dev/kp/api/v1/components/merchants/19g6ilbkq14hs?themeId=${themeId}`,
        {
          headers: {
            api_key: apiKey,
          },
        }
      )
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <div style={{ margin: "10px", flexWrap: true }}>
        <Space style={{ flexDirection: "column" }}>
          <Space>
            mid
            <Input
              placeholder={"mid"}
              value={mid}
              onChange={(e) => {
                setMid(e.target.value);
              }}
            />
          </Space>
          <Space>
            environment
            <Input
              value={environment}
              placeholder={"environment"}
              onChange={(e) => {
                setEnvironment(e.target.value);
              }}
            />
          </Space>
          <Space>
            type
            <Input
              value={type}
              placeholder={"type"}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </Space>
          <Space>
            storeId
            <Input
              value={storeId}
              placeholder={"storeId"}
              onChange={(e) => {
                setStoreId(e.target.value);
              }}
            />
          </Space>
          <Space>
            fbpixel
            <Input
              value={fbpixel}
              placeholder={"fbpixel"}
              onChange={(e) => {
                setFbpixel(e.target.value);
              }}
            />
          </Space>
          <Space>
            themeId
            <Input
              value={themeId}
              placeholder={"themeId"}
              onChange={(e) => {
                setthemeId(e.target.value);
              }}
            />
          </Space>
          <Space>
            api-key
            <Input
              placeholder={"api-key"}
              value={apiKey}
              onChange={(e) => {
                setAPIKey(e.target.value);
              }}
            />
          </Space>
        </Space>
      </div>

      <Space style={{ margin: "10px" }}>
        <Button onClick={handleAddToWindow}>Add to window</Button>
        <Button onClick={handleCallAPI}>Call the API</Button>
      </Space>
      <div style={{ margin: "10px" }}>
        <h3>This is available on window object</h3>
        <br />
        {windowObject && JSON.stringify(windowObject)}
      </div>
      <div style={{ margin: "10px" }}>
        <h3>API response</h3>
        <br />
        {JSON.stringify(response) || JSON.stringify(error)}
      </div>
    </div>
  );
}
