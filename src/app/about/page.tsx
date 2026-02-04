"use client"

export default function About() {

    return (
        <>
            <h1 style={{
                fontFamily: "cursive",
                margin: "10px",
                padding: "10px",
            }}>ABOUT PAGE</h1>

            <div style={{ textAlign: "center" }}>

                <p>Below this line is a button<br></br>don't click it</p>

                <hr></hr>

                <button style={{
                    color: "black",
                    fontFamily: "math",
                    backgroundColor: "maroon",
                }}
                    onClick={() => alert("                                                                                                                                                                                              wtf dude     (° ͡ ʖ_° ͡) ")}
                >NO TOUCHING!</button>

                <hr></hr>

                <h6 style={{
                    color: "grey",
                    fontFamily: "emoji"
                }}
                >please, do not click the button</h6>

            </div>
        </>
    )
}