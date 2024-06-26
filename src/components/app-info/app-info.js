import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>Employee management in the company N</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>The award will be given to: {increased}</h2>
    </div>
  );
};

export default AppInfo;
