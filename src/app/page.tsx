import Image from "next/image";
import Header from "./components/header";
import FileUpload from "./components/fileupload";


export default function Home() {
  return (
    <main>
      <Header />
      <FileUpload />
    </main>
  );
}
