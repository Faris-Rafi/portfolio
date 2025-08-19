import moment from "moment";

export default function Footer() {
  return (
    <footer className="flex justify-center w-full">
      <div className="max-w-7xl w-full">
        <hr />
        <p className="text-center text-muted-foreground py-6">
          Portfolio - MFR &copy; {moment().year()}
        </p>
      </div>
    </footer>
  );
}
