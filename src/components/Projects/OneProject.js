import React from 'react';

function OneProject({id, img, details, name, volt, length, date, category, role, installation, conductor, circuits, insulator}) {
  return (
    <div className={`col-lg-4 col-sm-6 project-col item ${category}`}>
        <div className="project">
            <img src={img} alt="project1" className="img-fluid rounded-sm" />
            <div className="project-overlay rounded-sm">
                <h3 className="project-name">{name}</h3>
                <h5 className="project-data">{volt}</h5>
                <h5 className="project-data">{length}</h5>
                <p className="project-data">{date}</p>
                <a className="btn c-btn m-1 project-btn" href={`#details${id}`}>Details</a>
            </div>
            <div className="category" >
                {category}
            </div>
            <div className="overlay-gallery" id={`details${id}`}>
                <div className="container details-cont rounded-sm">
                    <div className="row">
                        <div className="col-lg gallery-text py-3">
                            <table className="text-left text-white">
                                <tbody>
                                    <tr className="py-2">
                                        <th className="text-center text-primary">Item</th>
                                        <td className="text-center text-primary">Details</td>
                                    </tr>
                                    <tr className="">
                                        <th className="py-xl-2 pb-1">Project:</th>
                                        <td className="px-2">{name}</td>
                                    </tr>
                                    <tr className="">
                                        <th className="py-xl-2 pb-1">Role:</th>
                                        <td className="px-2">{role}</td>
                                    </tr>
                                    <tr className="">
                                        <th className="py-xl-2 pb-1">Installation:</th>
                                        <td className="px-2">{installation}</td>
                                    </tr>
                                    <tr className="">
                                        <th className="py-xl-2 pb-1">Volt:</th>
                                        <td className="px-2">{volt}</td>
                                    </tr>
                                    <tr className="">
                                        <th className="py-xl-2 pb-1">Length:</th>
                                        <td className="px-2">{length}</td>
                                    </tr>
                                    <tr className="">
                                        <th className="py-xl-2 pb-1">Circuits: </th>
                                        <td className="px-2">{circuits}</td>
                                    </tr>
                                    <tr className="">
                                        <th className="py-xl-2 pb-1">Conductor: </th>
                                        <td className="px-2"> {conductor}</td>
                                    </tr>
                                    <tr className="">
                                        <th className="py-xl-2 pb-1">Insulator: </th>
                                        <td className="px-2">{insulator}</td>
                                    </tr>
                                    <tr className="">
                                        <th className="py-xl-2 pb-1">Excuted:</th>
                                        <td className="px-2">{date}</td>
                                    </tr>
                                    <tr className="">
                                        <th className="py-xl-2 pb-1">Description: </th>
                                        <td className="px-2"> {details}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg gallery-img py-3">
                            <img className="w-100 rounded-sm" src={img} alt="project" />
                        </div>
                    </div>
                    <a href="/" className="close"><i className="icon icon-cancel-circle"></i></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OneProject;
