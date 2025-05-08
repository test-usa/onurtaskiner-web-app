const AdminNavBar = () => {
  return (
    <div className="w-full bg-[var-(--color-bgPrimary)] ">
      <div className="flex items-center justify-between p-4 ">
        <h1 className="text-xl font-bold">Admin Dashboard here</h1>
        <button className="btn btn-primary">Logout</button>
      </div>
    </div>
  );
};

export default AdminNavBar;
