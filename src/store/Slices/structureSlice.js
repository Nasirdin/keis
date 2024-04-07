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
          fullName: "Джусупова Асель Дженышбековна",
          position: "chairman",
          resume:
            "https://drive.google.com/file/d/1B6DeE7azrfyJ-4WtkFeg_JSQyymjFSdL/view",
        },
        {
          id: 2,
          fullName: "Сабиров Болот Будайбекович",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/16AOTzeGZh4EZ_m7KDZOHSsrPzEYLmU4h/view",
        },
        {
          id: 3,
          fullName: "Акматова Зарина Салмоорбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1uQ413jYZiA-6Gt_9QnEiOHfqD766n67N/view",
        },
        {
          id: 4,
          fullName: "Ахматкалый кызы Назира",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1sSUNQkV_sCQoEDrokiL-1vBqtg1QAej2/view",
        },
        {
          id: 5,
          fullName: "Джусубалиева Астра Калыбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1Etj7fGxqyTFQxIbL-j4uaNJcZoWGNeyL/view",
        },
        {
          id: 6,
          fullName: "Джумабекова Малика Мамбеткалыевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1o58WEnwZvyNDtNlWb9AP-K5EmWrxiZQR/view",
        },
        {
          id: 7,
          fullName: "Даниярова Насикат Тилекматовна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/19Ph0j2E8CM7wwjVHbHZgcwAEwABISYEb/view",
        },
        {
          id: 8,
          fullName: "Айдралиева Ажар Азиреталиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1lAZfk2nkL0XxNI9n2GJReRIjYgyoVg6H/view",
        },
        {
          id: 9,
          fullName: "Мамырканова Гульмира Сейдахматовна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/10QYEoox1Px2jE1bEsDamVS6uYytWDCbA/view",
        },
        {
          id: 10,
          fullName: "Ормонкулова Аида Разилбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1cRHfFjDeeyJXXienRL-L93HP9RMWzZfL/view",
        },
        {
          id: 11,
          fullName: "Тулебердиева Чинара Насырынбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1W9DFM4YwRujJjPb0ZxE4J2txiRndtWzs/view",
        },
        {
          id: 12,
          fullName: "Мирова Сырга Мировна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1i-OuylXrkChD9uT5RGqeR5FYb02nvE5c/view",
        },
      ],
    },
    {
      id: 2,
      name: "ПМК Бухгалтерский учет",
      text: "Предметно-методическая комиссия «Бухгалтерский учет» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Бухгалтерский учет» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальности 080110 «Экономика и бухгалтерский учет (по отраслям)».",
      to: "accounting",
      composition: [
        {
          id: 1,
          fullName: "Абдрахманова Бермет Манасбековна",
          position: "chairman", // teacher
          resume:
            "https://drive.google.com/file/d/1s2EPejKTThhZMzzCiWI_8PeoMaO6BqHB/view",
        },
        {
          id: 2,
          fullName: "Чекеева Жамал Болотовна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1Y7J8Q60RU91sfRIVsL4zV-tCXDmCONGQ/view",
        },
        {
          id: 3,
          fullName: "Каныбекова Айша Эрнсовна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1wlvpyWRlUYHlCApq02kQ4IqHevFKFita/view",
        },
        {
          id: 4,
          fullName: "Исаева Кыял Абаскановна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1epODwar1knZCOzaZOEucwAu95L_7oGYR/view",
        },
        {
          id: 5,
          fullName: "Аманова Эльнура Тенизбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1dKx-0upiLO1iKkljB7Qm7kpxKvqQpwEs/view",
        },
        {
          id: 6,
          fullName: "Мусамамбетова Ырыскүл Зарылбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1MSx26_0NlQ_CcyaOvXljHJjI2PQ-4fGE/view",
        },
        {
          id: 7,
          fullName: "Шаадатова Мээрим Шаадатовна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1jSFHtVae0tX2m7cN25WQUZzVsv073Kq8/view",
        },
        {
          id: 8,
          fullName: "Талантбекова Асыл Талантбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1E10On7Cs4mmcKLTWycxp5Yj9C94YDWrS/view",
        },
        {
          id: 9,
          fullName: "Эрматова Асылбу Исиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/18hXo8wIJV8jmaG82hPpCBRr9lyZOh36F/view",
        },
      ],
    },
    {
      id: 3,
      name: "ПМК Финансовые дисциплины",
      text: "Предметно-методическая комиссия «Финансовые дисциплины» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Финансовые дисциплины» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальностям 080106 «Финансы (по отраслям)», 080108 «Банковское дело», 080107 «Налоги и налогообложение». ",
      to: "financial-disciplines",
      composition: [
        {
          id: 1,
          fullName: "Казакбекова Г.Б.",
          position: "chairman", // teacher
          resume:
            "https://drive.google.com/file/d/13i8VL74v2AvLcF9WAY8lfKOLzJ7Cg0xN/view",
        },
        {
          id: 2,
          fullName: "Ибраева Ж.А.",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/12Ls8WxVPunZDmeWQ-MXTTtXKPeh0RdF3/view",
        },
        {
          id: 3,
          fullName: "Ташырбаева А.А.",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1fNBR5lay_phlwMy8a3k9it4M2ZvZX6uu/view",
        },
        {
          id: 4,
          fullName: "Осмонжанова Ч. А.",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1mv5U5LBfDcQGYLCBnztvA3oXWBqXc5Cb/view",
        },
        {
          id: 5,
          fullName: "Эдилбаев К.Ч.",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1Cr3YDfJ0DZ0UP7gmbBehOR2-OVNgJIu6/view",
        },
        {
          id: 6,
          fullName: "Молдакунов У. А.",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1QQb2r9ckRv_ysQiCSbKMHtfmEQF39Dsa/view",
        },
        {
          id: 7,
          fullName: "Молдоева Т. Т.",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1VYa_XzroD9G4o9sSSF3sQeVMhK9Fy6RQ/view",
        },
        {
          id: 8,
          fullName: "Шаменалиева Д. И.",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1Z3aGlLbzn0c9aYnBiWzSoYeJ10UgAG0F/view",
        },
        {
          id: 9,
          fullName: "Темирбекова А. Т.",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1k4tKW8WaSxH0x5dayKw_mBRHQIyyUe6V/view",
        },
        {
          id: 10,
          fullName: "Армурзаева Д. Э.",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1VCbNEY71ybWGwokAk9RgxeNOvrGFtQhw/view",
        },
      ],
    },
    {
      id: 4,
      name: "ПМК Языковые дисциплины и физической культуры",
      text: "Предметно-методическая комиссия «Языковые дисциплины и физической культуры» была образована в 2016 году приказом № 266, от 4 сентября.",
      to: "language-disciplines-and-physical-education",
      composition: [
        {
          id: 1,
          fullName: "Кочорбаева Нургуль Бокоевна",
          position: "chairman", // teacher
          resume:
            "https://drive.google.com/file/d/13WoFJxaAtpvpw-WQkRESsdTa_qmEmGDs/view",
        },
        {
          id: 2,
          fullName: "Туляганова Жазгуль Кимсанбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1klIX5OMPdc09ALE4gHDK2A2lQoYzHUZV/view",
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
            "https://drive.google.com/file/d/1-CvGZ1571taIJFqbXmBFwRr7uZjDOQN9/view",
        },
        {
          id: 6,
          fullName: "Будайчиева Чынара Касымалиевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1M56Vjdy5kne67sAmdqfH5FPP6nQsHn10/view",
        },
        {
          id: 7,
          fullName: "Иманалиева Майрамкул Айтбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1F5sEzU6K4TlzT9AA9q18Xewgyy5cXteo/view",
        },
        {
          id: 8,
          fullName: "Жузупбек кызы Таннуру",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1Dy_EqaOYxuNe6kmwn-QUmX6HlsHMQOeg/view",
        },
        {
          id: 9,
          fullName: "Абдыкадыров Нурзатбек Асхатбекович",
          position: "teacher",
          resume: "",
        },
        {
          id: 10,
          fullName: "Абылова Гулмир Жапаровна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1M76z1CLV2oC3arzIsxhzQrsHcN3iOReq/view",
        },
        {
          id: 11,
          fullName: "Саматбек Нурбек уулу",
          position: "teacher",
          resume: "",
        },
      ],
    },
    {
      id: 5,
      name: "ПМК Технология и торговля",
      text: "Предметно-методическая комиссия была образована еще во времена ФТСТ , после реорганизации 2016 году была переименована как «Технология и торговля», приказом № 266, от 4 сентября 2016 года КЭУ им. М.Рыскулбекова. ПМК «Технология и торговля» выпускает специалистов среднего звена по специальности 260502 «Технология продукции общественного питания». На протяжении многих лет выпустила десятки тысяч техник-технологов в области общественного питания.",
      to: "technology-and-trade",
      composition: [
        {
          id: 1,
          fullName: "Шейшеналиева Н.Т.",
          position: "chairman", // teacher
          resume:
            "https://drive.google.com/file/d/1XXKT4Ykg69MPyu92kCkdD76T3e_Qg66g/view",
        },
        {
          id: 2,
          fullName: "Абдыкадырова Н.А.",
          position: "teacher", // teacher
          resume:
            "https://drive.google.com/file/d/1BSVigC-1-2Hp8mRVH2p76wRurs_4niBi/view",
        },
        {
          id: 3,
          fullName: "Есенбаева Г.М.",
          position: "teacher", // teacher
          resume:
            "https://drive.google.com/file/d/1sXQavPNbCSSQWsaqF-uGrDKqqJv5coMo/view",
        },
        {
          id: 4,
          fullName: "Суйунбекова Н.С.",
          position: "teacher", // teacher
          resume:
            "https://drive.google.com/file/d/11i_c0xCTGLDwWsE9TdbW3qLBuUWR-b23/view",
        },
        {
          id: 5,
          fullName: "Бектурова А.К.",
          position: "teacher", // teacher
          resume:
            "https://drive.google.com/file/d/1IFRQy0FdLO1nOOh-16RRx4S9WQayZYDM/view",
        },
        {
          id: 6,
          fullName: "Кожоянова С.А.",
          position: "teacher", // teacher
          resume:
            "https://drive.google.com/file/d/1RMr4t5sdvuCm0JWmPzYa3bFxaRo962D_/view",
        },
        {
          id: 7,
          fullName: "Козлова С.В.",
          position: "teacher", // teacher
          resume:
            "https://drive.google.com/file/d/1VfXaRoIc2XMzuQ1Y0MHNKcX8FPWneSth/view",
        },
      ],
    },
    {
      id: 6,
      name: "ПМК Информатика и естественнонаучные дисциплин",
      text: "Предметно-методическая комиссия «Информатика и естественнонаучные дисциплин» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Информатика и естественнонаучные дисциплин» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальности 230701«Прикладная информатика (по отраслям)».",
      to: "computer-science-and-natural-sciences",
      composition: [
        {
          id: 1,
          fullName: "Токтобай кызы Касиет",
          position: "chairman", // teacher
          resume:
            "https://drive.google.com/file/d/1iCDxu4Y1GCd2iysFNg6hng-2LrN54f1s/view?usp=sharing",
        },
        {
          id: 2,
          fullName: "Арстанбекова Айсулуу Калыбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1Z89rLlKV9NiANSAdU6j3gcIrHlhwpJGL/view?usp=sharing",
        },
        {
          id: 3,
          fullName: "Дадабаева Гаухар Каримджановна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1NU6pUzc3HByGmzpZxXfLWP890ArX1VN2/view?usp=sharing",
        },
        {
          id: 4,
          fullName: "Айдарбек кызы Элнура",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1gGchjl5cdgY_gvIEQLzZk317X9kHPEqr/view?usp=sharing",
        },
        {
          id: 5,
          fullName: "Тонуева Динара Иманбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1GXgO-7Jlppe3it4lhjeRaFBYFxbOhZ5U/view?usp=sharing",
        },
        {
          id: 6,
          fullName: "Назарбекова Ханзада Назарбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1HyQLB4Bhcq9KJEunPMDYxW0E_wKpCukW/view?usp=sharing",
        },
        {
          id: 7,
          fullName: "Кочконбаева Акбермет Кочконбаевна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1X-jkve0MmjqE4WTsuFRgk8lvJaGgGmLy/view?usp=sharing",
        },
        {
          id: 8,
          fullName: "Турсунбекова Гулжазы Рысбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1w8bxBv581r0EJ-Jdvg9J-8TiWaynZqnP/view?usp=sharing",
        },
        {
          id: 9,
          fullName: "Шергазиева Кенже Дуйшенбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1WSZif_1VBIuOLkHLS4jrCHtRniIyNixP/view?usp=sharing",
        },
        {
          id: 10,
          fullName: "Кубанычбек кызы Алтынбубу",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1VeO2LX_Vq8TEW24ZYdBur0tw5VabDoSY/view?usp=sharing",
        },
      ],
    },
    {
      id: 7,
      name: "ПМК Экономика, менеджмент и туризм",
      text: "Предметно-методическая комиссия «Экономика, менеджмент и туризм» была образована в 2016 году приказом № 266, от 4 сентября. ПМК «Экономика, менеджмент и туризм» КЭиС КЭУ им. М.Рыскулбекова выпускает специалистов среднего звена по специальностям 100105 «Организация обслуживания в гостиницах и туристических комплексах», 100201«Туризм», 080501«Менеджмент (по отраслям)». ",
      to: "economics-management-and-tourism",
      composition: [
        {
          id: 1,
          fullName: "Муктарбекова Сыяда Жолдошбековна",
          position: "chairman", // teacher
          resume:
            "https://drive.google.com/file/d/1RxO9sTmI2FfGuU5TZP34yH0Hkf9rm7DM/view",
        },
        {
          id: 1,
          fullName: "Абыкеева Жыпара Эшеновна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1fxueSx4x5k6qAUFIQB2AMsYrm_vX5sRm/view",
        },
        {
          id: 1,
          fullName: "Кыдыралиева Мээрим Эриковна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1BUnwyR4ejP1v5G1TA82WAp11Dy2ewPtF/view",
        },
        {
          id: 1,
          fullName: "Асан теги Алтынкуль",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1cKYjiLDvK4AyhaBkkQmM2mpmpWjtScMU/view",
        },
        {
          id: 1,
          fullName: "Кубанычбекова Айкерим Алмасбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1JPgB_U6yKkBUN_3M8qfu_EMZ1dBiq_3b/view",
        },
        {
          id: 1,
          fullName: "Эсенаманова Аида Анарбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/19ChH6G-3VMp-9PcN497neuN6e0DXrma7/view",
        },
        {
          id: 1,
          fullName: "Атышова Жыпар Исланбековна",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1vr_sWwkSyDmqXG3sdQ8ZDFwsYzNXZ9zM/view",
        },
        {
          id: 1,
          fullName: "Шеке кызы Гулжамал",
          position: "teacher",
          resume:
            "https://drive.google.com/file/d/1uhMoVJk_Ig_fidDjACMKTS4OvkMg6ehn/view",
        },
        {
          id: 1,
          fullName: "Грамоты и сертификаты ППС",
          position: "teacher",
          resume: "https://drive.google.com/file/d/1D1i0w9-t1axo8m0t3vdXVIlctdxLUVLU/view",
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
