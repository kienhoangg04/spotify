import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../Context'

export default function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs)
    const [idSong, setIdSong] = useState(0)

    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        setIdSong(song.id)
    }, [song])

    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className='table-auto w-full'>
                <thead className="text-white h-12">
                    <tr className='bg-slate-600'>
                        <th className='w-[10%]'>#</th>
                        <th className="text-left">Title</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]'><i className="fa fa-download"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DataSongs.map((song, index) => (
                            <tr key={index} 
                                className={`bg-slate-800 h-12 text-gray-500 hover:bg-gray-600 hover:text-yellow-200 ${idSong === song.id && 'text-yellow-300 bg-gray-600'}`}
                                onClick={() => handlePlaySong(song.id)}
                            >
                                <td className='text-center'>{index + 1}</td>
                                <td>{song.name}</td>
                                <td className='text-center'>{song.author}</td>
                                <td className='text-center'>
                                    <a href={song.url}>
                                        <i className='fa fa-download'></i>
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
