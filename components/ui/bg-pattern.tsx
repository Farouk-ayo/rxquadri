const BackgroundPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 opacity-5 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-500/5 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default BackgroundPattern;
