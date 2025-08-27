import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoKRFOyTIn1P8FjSGbLX7HqEzfWU1D_OowA&s" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg" alt="Logo" style={{ width: '60%' }} />
    </div>
  )
}

export default Logo