import { useFilter } from "../../../context/index";

export const FreeCancel = () => {
  const { isCancellable, filterDispatch } = useFilter();
  //logic
  const handleIsCancelChange = (event) => {
    filterDispatch({
      type: "IS_CANCEL",
      payload: event.target.checked,
    });
  };
  return (
    <div className="gap-xl">
      <label className="filter-label-name">Free Cancellation</label>

      <input
        className="filter-is-cancel-input"
        type="checkbox"
        onChange={handleIsCancelChange}
        value={isCancellable}
        checked={isCancellable}
      />
    </div>
  );
};
