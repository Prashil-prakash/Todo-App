const WelcomeMessage = () => {
  return (
    
    <div className="text-center py-10 px-4 bg-slate-50 dark:bg-slate-800/20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl my-4 select-none">
  <div className="text-4xl mb-3 animate-bounce">🎉</div>
  <p className="text-lg font-bold text-slate-700 dark:text-slate-300 tracking-wide capitalize">
    Enjoy your day!
  </p>
  <p className="text-sm font-medium text-slate-400 dark:text-slate-500 mt-1">
    Your schedule is completely clear.
  </p>
</div>
  );
};

export default WelcomeMessage;