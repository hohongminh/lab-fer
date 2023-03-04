import "./Films.css"
import { ListOfFilms } from "../../../ListFilm/ListOfFilms"
import { useState } from "react";
import { Button } from "react-materialize";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
function Films() {
    const [movie, setMovie] = useState([]);

    const [open, setOpen] = useState(false);
    const [play, setPlay] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen1 = () => {
        setPlay(true);
    };
    const handleClose1 = () => {
        setPlay(false);
        setOpen(false);

    };


    return (
        <>
            <div className="Films"  >
                {ListOfFilms.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.img} alt="" />
                        <div className="card-body">
                            <div className="title-body">
                                <h3>{item.title}</h3>
                            </div>
                            ({item.nation}-{item.year})
                        </div>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setMovie(item);
                                handleClickOpen();
                            }}
                        >
                            Detail
                        </Button>
                    </div>
                ))}
                <br />

            </div>
            <Dialog
                maxWidth={1000}
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            ><div className="showInfo">
                    <DialogTitle>
                        <img src={movie.img} />
                        {/* <Button
                                onClick={() => {
                                    handleClickOpen1();
                                    handleClose();
                                }}
                            > Movie
                            </Button> */}

                    </DialogTitle>

                    <div className="description">
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                <h1>{movie.title}</h1>

                                <h5 > {movie.info}</h5>

                            </DialogContentText>
                        </DialogContent>
                        <Button
                            onClick={() => {
                                handleClickOpen1();
                                handleClose();
                            }}
                        > Movie
                        </Button>
                        {/* <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                        </DialogActions> */}
                    </div>
                </div>
            </Dialog>

            <Dialog
                maxWidth={500}
                open={play}
                keepMounted
                onClose={handleClose1}
                aria-describedby="alert-dialog-slide-description"
            >
                {/* <DialogTitle>

                </DialogTitle> */}
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <>
                            <div >
                                <iframe
                                    width="960"
                                    height="415"
                                    src={movie.video}
                                    title="YouTube video player"
                                    // frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </>
                    </DialogContentText>
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose1}>Close</Button>
                </DialogActions> */}
            </Dialog>
        </>
    )

}
export default Films