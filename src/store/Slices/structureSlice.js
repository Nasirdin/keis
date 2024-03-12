import { createSlice } from "@reduxjs/toolkit";
// export const getBlogList = createAsyncThunk(
//   "blogs/getBlogList",
//   async function (_, { rejectWithValue }) {
//     try {
//       const response = await axios.get(`${url}/api/blogs/`);
//       return [response.data];
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

const initialState = {
  structureList: [
    {
      id: 1,
      name: "ПМК Гуманитарно-правовые дисциплины",
      text: "Предметно-методическая комиссия «Гуманитарно-правовые дисциплины» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Гуманитарно-правовые дисциплины» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальностям 030503«Правоведение», 030504«Право и организация социального обеспечения», 050711«Социальная педагогика».",
      to: "humanitarian-legal-disciplines",
      composition: [
        {
          id: 1,
          fullName: "Кочорбаева Нургуль Бокоевна",
          position: "chairman",
          resume:
            "https://drive.google.com/file/d/10kBcZyhXxpuXGDO5CTKdj1CVMI1A9RY6/view?usp=share_link",
        },
        {
          id: 2,
          fullName: "Туляганова Жазгуль Кимсанбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1YtpSG-j6gZBoqTxrOlUN7PhCay6-tcQw/view",
        },
        {
          id: 3,
          fullName: "Омурканов Мирлан Токтотемирович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1FDjBrPjX1zRzIB5agbrRHETFGIp-trn0/view",
        },
        {
          id: 4,
          fullName: "Мустафаев Чынгыз Азимович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/18aq9FlCwRe2gXru2Dj_bnh0itgx7apbs/view",
        },
        {
          id: 5,
          fullName: "Казакова Сахида Осмоновна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1P_zi8pl9EsnB7TDgFGTP5O2fBHfwYAnV/view",
        },
        {
          id: 6,
          fullName: "Будайчиева Чынара Касымалиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1eGjuD7Xg-d3XnmtJgZzkyiw3cnQcS37I/view",
        },
        {
          id: 7,
          fullName: "Омуркулов Ильяс Абдыкамилович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1I47DyrVvNsCTRpI1y8pXTyHBNrlaYJJS/view",
        },
        {
          id: 8,
          fullName: "Иманалиева Майрамкул Айтбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1F5sEzU6K4TlzT9AA9q18Xewgyy5cXteo/view",
        },
        {
          id: 9,
          fullName: "Кенжебаева Айсалкын Кадырбаевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1A6SGs3mQLeUPqD0zTTcGIi1df74LiiXg/view",
        },
        {
          id: 10,
          fullName: "Жээмырза кызы Мээрим",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1d8Yh_yb2hqTMZXDuHLJ-jiF1xHgteYxh/view",
        },
        {
          id: 11,
          fullName: "Дюшеева Сымбат Кубанычбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1DlEwYYS2QulOuR2iWYTX1xhGbcHYKkU9/view",
        },
      ],
    },
    {
      id: 2,
      name: "ПМК Гуманитарно-правовые дисциплины",
      text: "Предметно-методическая комиссия «Гуманитарно-правовые дисциплины» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Гуманитарно-правовые дисциплины» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальностям 030503«Правоведение», 030504«Право и организация социального обеспечения», 050711«Социальная педагогика».",
      to: "humanitarian-legal-disciplines",
      composition: [
        {
          id: 1,
          fullName: "Кочорбаева Нургуль Бокоевна",
          position: "chairman",
          resume:
            "https://drive.google.com/file/d/10kBcZyhXxpuXGDO5CTKdj1CVMI1A9RY6/view?usp=share_link",
        },
        {
          id: 2,
          fullName: "Туляганова Жазгуль Кимсанбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1YtpSG-j6gZBoqTxrOlUN7PhCay6-tcQw/view",
        },
        {
          id: 3,
          fullName: "Омурканов Мирлан Токтотемирович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1FDjBrPjX1zRzIB5agbrRHETFGIp-trn0/view",
        },
        {
          id: 4,
          fullName: "Мустафаев Чынгыз Азимович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/18aq9FlCwRe2gXru2Dj_bnh0itgx7apbs/view",
        },
        {
          id: 5,
          fullName: "Казакова Сахида Осмоновна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1P_zi8pl9EsnB7TDgFGTP5O2fBHfwYAnV/view",
        },
        {
          id: 6,
          fullName: "Будайчиева Чынара Касымалиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1eGjuD7Xg-d3XnmtJgZzkyiw3cnQcS37I/view",
        },
        {
          id: 7,
          fullName: "Омуркулов Ильяс Абдыкамилович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1I47DyrVvNsCTRpI1y8pXTyHBNrlaYJJS/view",
        },
        {
          id: 8,
          fullName: "Иманалиева Майрамкул Айтбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1F5sEzU6K4TlzT9AA9q18Xewgyy5cXteo/view",
        },
        {
          id: 9,
          fullName: "Кенжебаева Айсалкын Кадырбаевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1A6SGs3mQLeUPqD0zTTcGIi1df74LiiXg/view",
        },
        {
          id: 10,
          fullName: "Жээмырза кызы Мээрим",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1d8Yh_yb2hqTMZXDuHLJ-jiF1xHgteYxh/view",
        },
        {
          id: 11,
          fullName: "Дюшеева Сымбат Кубанычбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1DlEwYYS2QulOuR2iWYTX1xhGbcHYKkU9/view",
        },
      ],
    },
    {
      id: 3,
      name: "ПМК Гуманитарно-правовые дисциплины",
      text: "Предметно-методическая комиссия «Гуманитарно-правовые дисциплины» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Гуманитарно-правовые дисциплины» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальностям 030503«Правоведение», 030504«Право и организация социального обеспечения», 050711«Социальная педагогика».",
      to: "humanitarian-legal-disciplines",
      composition: [
        {
          id: 1,
          fullName: "Кочорбаева Нургуль Бокоевна",
          position: "chairman",
          resume:
            "https://drive.google.com/file/d/10kBcZyhXxpuXGDO5CTKdj1CVMI1A9RY6/view?usp=share_link",
        },
        {
          id: 2,
          fullName: "Туляганова Жазгуль Кимсанбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1YtpSG-j6gZBoqTxrOlUN7PhCay6-tcQw/view",
        },
        {
          id: 3,
          fullName: "Омурканов Мирлан Токтотемирович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1FDjBrPjX1zRzIB5agbrRHETFGIp-trn0/view",
        },
        {
          id: 4,
          fullName: "Мустафаев Чынгыз Азимович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/18aq9FlCwRe2gXru2Dj_bnh0itgx7apbs/view",
        },
        {
          id: 5,
          fullName: "Казакова Сахида Осмоновна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1P_zi8pl9EsnB7TDgFGTP5O2fBHfwYAnV/view",
        },
        {
          id: 6,
          fullName: "Будайчиева Чынара Касымалиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1eGjuD7Xg-d3XnmtJgZzkyiw3cnQcS37I/view",
        },
        {
          id: 7,
          fullName: "Омуркулов Ильяс Абдыкамилович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1I47DyrVvNsCTRpI1y8pXTyHBNrlaYJJS/view",
        },
        {
          id: 8,
          fullName: "Иманалиева Майрамкул Айтбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1F5sEzU6K4TlzT9AA9q18Xewgyy5cXteo/view",
        },
        {
          id: 9,
          fullName: "Кенжебаева Айсалкын Кадырбаевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1A6SGs3mQLeUPqD0zTTcGIi1df74LiiXg/view",
        },
        {
          id: 10,
          fullName: "Жээмырза кызы Мээрим",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1d8Yh_yb2hqTMZXDuHLJ-jiF1xHgteYxh/view",
        },
        {
          id: 11,
          fullName: "Дюшеева Сымбат Кубанычбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1DlEwYYS2QulOuR2iWYTX1xhGbcHYKkU9/view",
        },
      ],
    },
    {
      id: 4,
      name: "ПМК Гуманитарно-правовые дисциплины",
      text: "Предметно-методическая комиссия «Гуманитарно-правовые дисциплины» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Гуманитарно-правовые дисциплины» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальностям 030503«Правоведение», 030504«Право и организация социального обеспечения», 050711«Социальная педагогика».",
      to: "humanitarian-legal-disciplines",
      composition: [
        {
          id: 1,
          fullName: "Кочорбаева Нургуль Бокоевна",
          position: "chairman",
          resume:
            "https://drive.google.com/file/d/10kBcZyhXxpuXGDO5CTKdj1CVMI1A9RY6/view?usp=share_link",
        },
        {
          id: 2,
          fullName: "Туляганова Жазгуль Кимсанбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1YtpSG-j6gZBoqTxrOlUN7PhCay6-tcQw/view",
        },
        {
          id: 3,
          fullName: "Омурканов Мирлан Токтотемирович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1FDjBrPjX1zRzIB5agbrRHETFGIp-trn0/view",
        },
        {
          id: 4,
          fullName: "Мустафаев Чынгыз Азимович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/18aq9FlCwRe2gXru2Dj_bnh0itgx7apbs/view",
        },
        {
          id: 5,
          fullName: "Казакова Сахида Осмоновна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1P_zi8pl9EsnB7TDgFGTP5O2fBHfwYAnV/view",
        },
        {
          id: 6,
          fullName: "Будайчиева Чынара Касымалиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1eGjuD7Xg-d3XnmtJgZzkyiw3cnQcS37I/view",
        },
        {
          id: 7,
          fullName: "Омуркулов Ильяс Абдыкамилович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1I47DyrVvNsCTRpI1y8pXTyHBNrlaYJJS/view",
        },
        {
          id: 8,
          fullName: "Иманалиева Майрамкул Айтбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1F5sEzU6K4TlzT9AA9q18Xewgyy5cXteo/view",
        },
        {
          id: 9,
          fullName: "Кенжебаева Айсалкын Кадырбаевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1A6SGs3mQLeUPqD0zTTcGIi1df74LiiXg/view",
        },
        {
          id: 10,
          fullName: "Жээмырза кызы Мээрим",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1d8Yh_yb2hqTMZXDuHLJ-jiF1xHgteYxh/view",
        },
        {
          id: 11,
          fullName: "Дюшеева Сымбат Кубанычбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1DlEwYYS2QulOuR2iWYTX1xhGbcHYKkU9/view",
        },
      ],
    },
    {
      id: 5,
      name: "ПМК Гуманитарно-правовые дисциплины",
      text: "Предметно-методическая комиссия «Гуманитарно-правовые дисциплины» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Гуманитарно-правовые дисциплины» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальностям 030503«Правоведение», 030504«Право и организация социального обеспечения», 050711«Социальная педагогика».",
      to: "humanitarian-legal-disciplines",
      composition: [
        {
          id: 1,
          fullName: "Кочорбаева Нургуль Бокоевна",
          position: "chairman",
          resume:
            "https://drive.google.com/file/d/10kBcZyhXxpuXGDO5CTKdj1CVMI1A9RY6/view?usp=share_link",
        },
        {
          id: 2,
          fullName: "Туляганова Жазгуль Кимсанбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1YtpSG-j6gZBoqTxrOlUN7PhCay6-tcQw/view",
        },
        {
          id: 3,
          fullName: "Омурканов Мирлан Токтотемирович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1FDjBrPjX1zRzIB5agbrRHETFGIp-trn0/view",
        },
        {
          id: 4,
          fullName: "Мустафаев Чынгыз Азимович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/18aq9FlCwRe2gXru2Dj_bnh0itgx7apbs/view",
        },
        {
          id: 5,
          fullName: "Казакова Сахида Осмоновна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1P_zi8pl9EsnB7TDgFGTP5O2fBHfwYAnV/view",
        },
        {
          id: 6,
          fullName: "Будайчиева Чынара Касымалиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1eGjuD7Xg-d3XnmtJgZzkyiw3cnQcS37I/view",
        },
        {
          id: 7,
          fullName: "Омуркулов Ильяс Абдыкамилович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1I47DyrVvNsCTRpI1y8pXTyHBNrlaYJJS/view",
        },
        {
          id: 8,
          fullName: "Иманалиева Майрамкул Айтбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1F5sEzU6K4TlzT9AA9q18Xewgyy5cXteo/view",
        },
        {
          id: 9,
          fullName: "Кенжебаева Айсалкын Кадырбаевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1A6SGs3mQLeUPqD0zTTcGIi1df74LiiXg/view",
        },
        {
          id: 10,
          fullName: "Жээмырза кызы Мээрим",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1d8Yh_yb2hqTMZXDuHLJ-jiF1xHgteYxh/view",
        },
        {
          id: 11,
          fullName: "Дюшеева Сымбат Кубанычбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1DlEwYYS2QulOuR2iWYTX1xhGbcHYKkU9/view",
        },
      ],
    },
    {
      id: 6,
      name: "ПМК Гуманитарно-правовые дисциплины",
      text: "Предметно-методическая комиссия «Гуманитарно-правовые дисциплины» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Гуманитарно-правовые дисциплины» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальностям 030503«Правоведение», 030504«Право и организация социального обеспечения», 050711«Социальная педагогика».",
      to: "humanitarian-legal-disciplines",
      composition: [
        {
          id: 1,
          fullName: "Кочорбаева Нургуль Бокоевна",
          position: "chairman",
          resume:
            "https://drive.google.com/file/d/10kBcZyhXxpuXGDO5CTKdj1CVMI1A9RY6/view?usp=share_link",
        },
        {
          id: 2,
          fullName: "Туляганова Жазгуль Кимсанбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1YtpSG-j6gZBoqTxrOlUN7PhCay6-tcQw/view",
        },
        {
          id: 3,
          fullName: "Омурканов Мирлан Токтотемирович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1FDjBrPjX1zRzIB5agbrRHETFGIp-trn0/view",
        },
        {
          id: 4,
          fullName: "Мустафаев Чынгыз Азимович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/18aq9FlCwRe2gXru2Dj_bnh0itgx7apbs/view",
        },
        {
          id: 5,
          fullName: "Казакова Сахида Осмоновна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1P_zi8pl9EsnB7TDgFGTP5O2fBHfwYAnV/view",
        },
        {
          id: 6,
          fullName: "Будайчиева Чынара Касымалиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1eGjuD7Xg-d3XnmtJgZzkyiw3cnQcS37I/view",
        },
        {
          id: 7,
          fullName: "Омуркулов Ильяс Абдыкамилович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1I47DyrVvNsCTRpI1y8pXTyHBNrlaYJJS/view",
        },
        {
          id: 8,
          fullName: "Иманалиева Майрамкул Айтбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1F5sEzU6K4TlzT9AA9q18Xewgyy5cXteo/view",
        },
        {
          id: 9,
          fullName: "Кенжебаева Айсалкын Кадырбаевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1A6SGs3mQLeUPqD0zTTcGIi1df74LiiXg/view",
        },
        {
          id: 10,
          fullName: "Жээмырза кызы Мээрим",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1d8Yh_yb2hqTMZXDuHLJ-jiF1xHgteYxh/view",
        },
        {
          id: 11,
          fullName: "Дюшеева Сымбат Кубанычбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1DlEwYYS2QulOuR2iWYTX1xhGbcHYKkU9/view",
        },
      ],
    },
    {
      id: 7,
      name: "ПМК Гуманитарно-правовые дисциплины",
      text: "Предметно-методическая комиссия «Гуманитарно-правовые дисциплины» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Гуманитарно-правовые дисциплины» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальностям 030503«Правоведение», 030504«Право и организация социального обеспечения», 050711«Социальная педагогика».",
      to: "humanitarian-legal-disciplines",
      composition: [
        {
          id: 1,
          fullName: "Кочорбаева Нургуль Бокоевна",
          position: "chairman",
          resume:
            "https://drive.google.com/file/d/10kBcZyhXxpuXGDO5CTKdj1CVMI1A9RY6/view?usp=share_link",
        },
        {
          id: 2,
          fullName: "Туляганова Жазгуль Кимсанбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1YtpSG-j6gZBoqTxrOlUN7PhCay6-tcQw/view",
        },
        {
          id: 3,
          fullName: "Омурканов Мирлан Токтотемирович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1FDjBrPjX1zRzIB5agbrRHETFGIp-trn0/view",
        },
        {
          id: 4,
          fullName: "Мустафаев Чынгыз Азимович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/18aq9FlCwRe2gXru2Dj_bnh0itgx7apbs/view",
        },
        {
          id: 5,
          fullName: "Казакова Сахида Осмоновна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1P_zi8pl9EsnB7TDgFGTP5O2fBHfwYAnV/view",
        },
        {
          id: 6,
          fullName: "Будайчиева Чынара Касымалиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1eGjuD7Xg-d3XnmtJgZzkyiw3cnQcS37I/view",
        },
        {
          id: 7,
          fullName: "Омуркулов Ильяс Абдыкамилович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1I47DyrVvNsCTRpI1y8pXTyHBNrlaYJJS/view",
        },
        {
          id: 8,
          fullName: "Иманалиева Майрамкул Айтбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1F5sEzU6K4TlzT9AA9q18Xewgyy5cXteo/view",
        },
        {
          id: 9,
          fullName: "Кенжебаева Айсалкын Кадырбаевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1A6SGs3mQLeUPqD0zTTcGIi1df74LiiXg/view",
        },
        {
          id: 10,
          fullName: "Жээмырза кызы Мээрим",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1d8Yh_yb2hqTMZXDuHLJ-jiF1xHgteYxh/view",
        },
        {
          id: 11,
          fullName: "Дюшеева Сымбат Кубанычбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1DlEwYYS2QulOuR2iWYTX1xhGbcHYKkU9/view",
        },
      ],
    },
    {
      id: 8,
      name: "ПМК Гуманитарно-правовые дисциплины",
      text: "Предметно-методическая комиссия «Гуманитарно-правовые дисциплины» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Гуманитарно-правовые дисциплины» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальностям 030503«Правоведение», 030504«Право и организация социального обеспечения», 050711«Социальная педагогика».",
      to: "humanitarian-legal-disciplines",
      composition: [
        {
          id: 1,
          fullName: "Кочорбаева Нургуль Бокоевна",
          position: "chairman",
          resume:
            "https://drive.google.com/file/d/10kBcZyhXxpuXGDO5CTKdj1CVMI1A9RY6/view?usp=share_link",
        },
        {
          id: 2,
          fullName: "Туляганова Жазгуль Кимсанбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1YtpSG-j6gZBoqTxrOlUN7PhCay6-tcQw/view",
        },
        {
          id: 3,
          fullName: "Омурканов Мирлан Токтотемирович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1FDjBrPjX1zRzIB5agbrRHETFGIp-trn0/view",
        },
        {
          id: 4,
          fullName: "Мустафаев Чынгыз Азимович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/18aq9FlCwRe2gXru2Dj_bnh0itgx7apbs/view",
        },
        {
          id: 5,
          fullName: "Казакова Сахида Осмоновна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1P_zi8pl9EsnB7TDgFGTP5O2fBHfwYAnV/view",
        },
        {
          id: 6,
          fullName: "Будайчиева Чынара Касымалиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1eGjuD7Xg-d3XnmtJgZzkyiw3cnQcS37I/view",
        },
        {
          id: 7,
          fullName: "Омуркулов Ильяс Абдыкамилович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1I47DyrVvNsCTRpI1y8pXTyHBNrlaYJJS/view",
        },
        {
          id: 8,
          fullName: "Иманалиева Майрамкул Айтбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1F5sEzU6K4TlzT9AA9q18Xewgyy5cXteo/view",
        },
        {
          id: 9,
          fullName: "Кенжебаева Айсалкын Кадырбаевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1A6SGs3mQLeUPqD0zTTcGIi1df74LiiXg/view",
        },
        {
          id: 10,
          fullName: "Жээмырза кызы Мээрим",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1d8Yh_yb2hqTMZXDuHLJ-jiF1xHgteYxh/view",
        },
        {
          id: 11,
          fullName: "Дюшеева Сымбат Кубанычбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1DlEwYYS2QulOuR2iWYTX1xhGbcHYKkU9/view",
        },
      ],
    },
  ],
  currentPMK: null,
  status: "",
};

const structureList = createSlice({
  name: "structure",
  initialState,
  reducers: {
    getStructureList(state, action) {},
    getPMKById(state, action) {
      console.log(action);
      state.currentPMK = state.structureList.filter((pmk) => {
        return pmk.id === action.payload.id;
      });
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getBlogList.pending, (state) => {
  //       state.status = "pending";
  //     })
  //     .addCase(getBlogList.fulfilled, (state, action) => {
  //       state.blogList = [...state.blogList, action.payload];
  //       state.status = "succeeded";
  //     })
  //     .addCase(getBlogList.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     });
  // },
});

export const { getStructureList, getPMKById } = structureList.actions;
export default structureList.reducer;
