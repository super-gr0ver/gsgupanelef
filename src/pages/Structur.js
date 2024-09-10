import React from "react";

import list1 from "../img/schedule/24ЭФм-о-11.pdf";
import list2 from "../img/schedule/24ЭПиО-о-11.pdf";
import list3 from "../img/schedule/23ЭФм-о-21.pdf";
import list4 from "../img/schedule/23ЭПиО-о-21.pdf";
import list5 from "../img/schedule/22ЭПиО-о-31.pdf";
import list6 from "../img/schedule/21ЭПиО-о-41.pdf";
import list7 from "../img/schedule/22ФиК-оз-31.pdf";

const doc1 = list1;
const doc2 = list2;
const doc3 = list3;
const doc4 = list4;
const doc5 = list5;
const doc6 = list6;
const doc7 = list7;

export function Structur() {
  return (
    <div className="main-page main-container structur">
      <div>
        <h3>24ЭФм-о-11</h3>
        <embed type="application/pdf" src={`${doc1}`} />
      </div>
      <div>
        <h3>Группа 24ЭПиО-о-11</h3>
        <embed type="application/pdf" src={`${doc2}`} />
      </div>
      <div>
        <h3>Группа 23ЭФм-о-21</h3>
        <embed type="application/pdf" src={`${doc3}`} />
      </div>
      <div>
        <h3>Группа 23ЭПиО-о-21</h3>
        <embed type="application/pdf" src={`${doc4}`} />
      </div>
      <div>
        <h3>Группа 22ЭПиО-о-31</h3>
        <embed type="application/pdf" src={`${doc5}`} />
      </div>
      <div>
        <h3>21ЭПиО-о-41</h3>
        <embed type="application/pdf" src={`${doc6}`} />
      </div>
      <div>
        <h3>22ФиК-оз-31</h3>
        <embed type="application/pdf" src={`${doc7}`} />
      </div>
    </div>
  );
}
