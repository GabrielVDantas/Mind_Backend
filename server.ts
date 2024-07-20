import app from "./src/app";

app.listen(process.env.WCPORT, () => {
  console.log("Aplicação rodando");
});
