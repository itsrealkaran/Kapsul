export function CtrlLogo() {
    return (
      <div className="relative inline-flex items-center space-x-2">
        <span className="text-4xl text-gray-700" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 700 }}>Kapsul.</span>
      </div>
    )
  }   
  
  export function AlphaLogo() {
    return (
      <div className="relative inline-flex items-center space-x-2">
        <span className="text-4xl text-gray-700" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 700 }}>Kapsul.</span>
        <div className="absolute -top-2 -end-12">
          <div className="bg-[#F1FCF7] p-1 rounded-full">
            <div className="px-2.5 py-0.25 bg-gradient-to-r from-indigo-100 via-violet-100 to-purple-100 border border-indigo-300 rounded-xl flex items-center shadow-sm">
              <span className="text-[10px] font-semibold tracking-wider text-violet-600 uppercase">alpha</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export function BetaLogo() {
    return (
      <div className="relative inline-flex items-center space-x-2">
        <span className="text-3xl text-gray-700" style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 700 }}>Kapsul.</span>
        <div className="absolute -top-2 -end-10">
          <div className="bg-[#F1FCF7] p-1 rounded-full">
            <div className="px-2.5 py-0.5 bg-gradient-to-r from-rose-100 via-pink-100 to-red-100 border border-rose-300 rounded-xl flex items-center shadow-sm">
              <span className="text-[10px] font-semibold tracking-wider text-rose-600 uppercase">beta</span>
            </div>
          </div>
        </div>
      </div>
    )
  }