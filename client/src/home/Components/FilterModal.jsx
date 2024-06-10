import {useState} from "react";

export default function FilterModal({filterData, setFilterData}) {
  const [inputData, setInputData] = useState(filterData);
  const handelChange = e => {
    if (e.name === "homeOffice") {
      if (inputData.homeOffice) {
        setInputData({...inputData, [e.name]: 0});
      } else {
        setInputData({...inputData, [e.name]: 1});
      }
      return;
    }
    setInputData({...inputData, [e.name]: e.value});
  };

  function handelFiltering() {
    const result = {};
    for (const key in inputData) {
      if (inputData[key] !== "") {
        result[key] = inputData[key];
      }
    }
    setFilterData(result);
  }
  function handelCanceling() {
    setFilterData({});
  }
  return (
    <dialog id="filtermodal" className="modal">
      <div className="modal-box">
        <form className="form-control">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="number"
              name="salaryFrom"
              placeholder="Payment lower limit"
              value={inputData.salaryFrom ?? ""}
              onChange={e => handelChange(e.target)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="number"
              name="salaryTo"
              placeholder="Payment upper limit"
              value={inputData.salaryTo ?? ""}
              onChange={e => handelChange(e.target)}
            />
          </label>
          <select
            className="select select-bordered flex items-center gap-2  w-full "
            name="type"
            value={inputData.type ?? ""}
            onChange={e => handelChange(e.target)}
          >
            <option disabled value="">
              Job type?
            </option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="internship">Internship</option>
          </select>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="company"
              className="grow"
              placeholder="Company"
              value={inputData.company ?? ""}
              onChange={e => handelChange(e.target)}
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Home office</span>
            <input
              type="checkbox"
              name="homeOffice"
              className="checkbox"
              value={inputData.homeOffice ?? ""}
              onClick={e => handelChange(e.target)}
            />
          </label>
        </form>
        <div className="modal-action">
          <form method="dialog" className="flex gap-1">
            <button
              className="btn bg-primary btn-ghost"
              onClick={handelCanceling}
            >
              Cancel
            </button>
            <button
              className="btn bg-primary btn-ghost"
              onClick={handelFiltering}
            >
              Filter
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}