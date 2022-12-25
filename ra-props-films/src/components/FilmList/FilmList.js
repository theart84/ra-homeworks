import FilmItem from "./FilmItem/FilmItem";

const DUMMY_DATA = [
  {
    id: 'ep4',
    title: 'Star Wars: Episode IV - A New Hope',
    imgURL: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/7803d21b-9f06-4596-87c8-59f77fca66a6/960x960',
    rating: 4,
    genre: 'Fantasy',
    price: 30
  },
  {
    id: 'ep1',
    title: 'Star Wars: Episode I - The Phantom Menace',
    imgURL: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/f4f2a7e6-b5d0-41e2-bee5-d409db2218c6/800x800',
    rating: 5,
    genre: 'Fantasy',
    price: 35
  },
  {
    id: 'omg1',
    title: 'Guardians',
    imgURL: 'https://kinopoisk-ru.clstorage.net/le15d8152/53e2e5DX/mxWM8ckjQK-QchXwdVsK2bCNcUcB1kKQbezxIx6cb6mM_8ltXAK5SxnqmrJSGWm8P1dMsxOytjK2Nuvt7liQc9oAWEEdh-RrtUZwlYH6_1mVaaVHJKMXpHxJNBdPWOptrS78aNnwSkmayA2QMevrvvlDKLdiF5PnMjfeDWptRLf7B34wbRfw7BEBFLNl_fiJ4QoR5mH0E0P6DTFgCD2_iLhe23zM0TnbSXus0vIpSa6r4Xk2Z3exNpJEjM8qHGCmW3YNllynkowj4WbRZw3Y-FOrEacx1FCTmczyMBs_HFmanfvdDDK66LjJLONT-QsuKzE4xFfnsWeztL5vaS8iZ-i2bId-RzI-gfPHENXu-YngKzIEAAZDsypsAdNrD51auQ9Zrs_yyRs66A3wgIspXPqA-Ic0FBGlk0bOXphOkJYKlx0Gn6VADcMwd7E1zWkoswgDleAE0eL6DVIAic6PWoks272eM6k6-VpsEpIKe4zqo2kGhHfyNaA2bB84LSAHecesxgy2otzgI0Vjhn-K2vEIobaTx5KhKp5yI8iPHKm5bvlNj6PKG8paPoCDm5pPSpMpZyXXUPURVPydqE3g91rknGS85sDsohBEonatq0ry2vGnQidC8pv8QjHZ7xzJWY0KfqwAm9q4Cs8Sg4sobUqQGLWW16G0UYb9fzgfUVfo9R33XKbyzdNhJuBXTGt44fjw9nHUcFNrzxGyi10dy-j92009cdk5mYuMICOoS05KIDn0RAZh9bKm7bxoD6C2mVY99U3EMe2T4DWTp02ImZGo4DaBpLJw62-zUqjPPyhJfNmcPYEZmSibv_BA-9jMeYFJpXYnECXj1K-NKw7QNJsEvvcPBNLfYyEWwBQs6LpxmeN1UDczsYn_IlFbXy5YqE0YfYyDq9l6exxAk1tYXNlSuGbEB9PEU2R_Xokvova6tR6mr-fz3EFSZVMFzouJQ8sTppIG05CbXiFCyo59iZl-2M4cYit42opeMqJ7Otz5U3iGh2Qg5xFE7t1oD2CXmtb8lC_kgIxCwhXyxk-6SPGrU-YRFtCxq-yTETgOvMobXbrdfFHrSfpo7ENgKBnteZHZRMbmECdD1dzMuw9DF1q1n6aN9JA_ksNmgcYtWtvDmjP2sKZx0OlOsfKLHv2LyU-JzK9SyOv4OI1iAghZvVmBGEUXh2OHg-fdbWl_MsZYZJ6GPsYwXtESZ6AETmubs3lT9JFVYjLrrrNAuLy9SgjNKe9fgQrbu3p-oKP7K59bInr1FYZjN8DlvHz7_lPGmqbdRuxWwM3jEHWwVS67KQNLU9UBVQLjuS6Q4Xr9TIu6PlkfDMNLSBu5PzPQiUr-WJE5J0SHctZC5F68exzSN6n2npfPBIJekuIko-SPWCmTmSLGIrWBQkgu4PM471xqa7_67IwRSfr4Wk3iEZtrL0iyuMSmZ5JmklT8j7mdcAeIdQ0UfPSw7eBxRxBlHvp5QzmgJ3BVMrO4jzBCyo7uiHoPG17MgRmKuip8EvB5WUzY8cq3FGcxFvPU_Z8rDlAWe1cchP9mkd6ioMVTpN0JOGHb4JVAZSLw-F6z0RouXFgpLnuuzDDYiQt5TkPwu5tseSBIV0en8DVw152PqZ8Atetmz_RehXAPsqG3wZTcSlqS2AJlM9cSIynekPApTw9oG2-5vP4TWRt7-k3C46kKzFiRSmSEl0EEc6YuzvpdIdQrBMyUjSch38DgdaBGPMsYwNuyJkAFIoPYPwGQy3w_Saseet3Mgcn7q3tfMpFKWQxb0Js0puQDtPIGTB8YbUKEi_evth0EMf3gcTSwNk3I-IPbcZdBtXKByb8j0tpNPZhLfliP_cCIOtm5DKKC6dne2SE6RDWVUuSzVO-P6Q7AJmlVrYbNRjOtwMP28HYNGXnDiTIXwZVD8thPgvLpbA_ZyO5Lzj3wmWvJi2yyAvhrr1nQmqQGxaFX88av7LodEvTIRJymvQQxHiFR5ZHUHmiroQrCxnCmgEMZTIECKe1-yHpuWu7cscsI2VqtIEJIC54JcLhEN8Xz53Nn7p9YLTHV-8cvpq3n8A_gssfRde9bS1Kb4hXgNxNgyo8DojjfvIiIjRrdz6LJyBvbfqKR-eieytJ7ZCe0oydiRe5_ud-T9CnUf6aMtDJ-wUEE4sXPK5jw2UN3wZTCcWt-oxPKrv-6KJ7bz95hGjqpej4igHvYXLnDWRd11BJ3E7TvfMndkRf5NxzVDxfjreCBxNN3T1ko4IniBQGEYIHIHTIDeR8NuohMSR-Ps_i7aZoeUuHZiT07kmrUJtZR94H3TG65zRL0GzSt5pyXkK3Qs3TzNU6o-MGa49cgtKIhW25TUSp9XtvKfgvePLA5e1iaTQPCe1kNe3KLd2Y2IjXz186vmN_BN7g0DRatxDO8QTM3MyYdamlx-tIVw3RCQEmeohKK_w7YC437X-2xmZso6L3iU8s6TelySNT3VzFVoIb__1t-woSrd-8XD8TSDnAjdrEUXWiqcKlQ5hMkU5NLjsHz2Sz9yUmNOc-d4urqy_lcwfBp-KyJMOsUdZZQJINGzB_rjOPXq9Zf1UxW8l3jEvSB90_bqNGa4leDxCFhi50TwutMPQv7PPq-_FF6G_g7HAOjiTu8ySLJtGTkAvezxqy_OaxzxjqWXTQvhYLMAvHVgeQ9uXvRKcPEk9ZjwqisYQD7zg3oCS-7LQ1jG4q7uDyD02rbjMkgyoaX1jEmoYQf_zvewHQ49g9FT_UC3NFhJGLE_4l7QcnwRIKXQEFZfgASGo2dm9h9qQyPY_ipCrmuoBFLyLwKwssHdkQhJqAljj9bD-Em-iUfFexHAn4hwbSiJh6LWLOpcqWzBVBgiBzBMLiM_tm7TfmOrlCZSxr5vNHT-Sr_SyI6xHRns0aSdlyt6N8TFjomrPTdldOf4JJmo7ScahuT-9LkgqWB8buOg2PJDJ-Ym48LzxyCOxsYKs1SEjpbH1kCSqdmpzA04HV8k#DSD',
    rating: 1,
    genre: 'Danger',
    price: 5
  }
]

const FilmList = () => {
  return (
    <>
      {DUMMY_DATA.map(film => <FilmItem key={film.id}
                                   id={film.id}
                                   title={film.title}
                                   src={film.imgURL}
                                   rating={film.rating}
                                   genre={film.genre}
                                   price={film.price}
        />
      )}
    </>
  )
}

export default FilmList;
