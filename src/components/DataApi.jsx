import React from "react";
import { DefaultLayout, LayoutTwoColumn, LayoutThreeColumn } from "./layouts";

const DataApi = ({data, text, layout}) => {
    return (
      <div className="my-10">
        {layout === "layout2" ? (
          <LayoutTwoColumn data={data} text={text} />
        ) : layout === "layout3" ? (
          <LayoutThreeColumn data={data} text={text} />
        ) : (
          <DefaultLayout data={data} text={text} />
        )}
      </div>
    );
};

export default DataApi;
