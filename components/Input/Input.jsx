//? ...rest syntax is just 'the rest' or all of the props. can be called anything
export const Input = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="block rounded border-slate-400 border-2 p-1 hover:border-slate-500"
    />
  );
};
