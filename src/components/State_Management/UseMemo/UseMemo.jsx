// components
import Names from "./Names/Names";
import Numbers from "./Numbers/Numbers";

export default function UseMemo() {
  // USECASES FOR USEMEMO = doing any complex calculation on a value
  // = when using arrays and objects

  return (
    <div className="m-5">
      <h1>UseMemo</h1>
      <Numbers />
      <Names />
    </div>
  );
}
