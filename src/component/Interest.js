import React from 'react'

const Interest = ({data, setData, errors}) => {
    const {interests} = data;

    const handleDataChange = (e, name) =>{
        setData((prevState) => ({
            ...prevState,
            interests: e.target.checked
            ? [...prevState.interests, e.target.name]
            : prevState.interests.filter((i) => i !== e.target.name),
        }));
    };

    console.log(interests);

  return (
    <div>
        <div>
            <label>
                <input 
                    type="checkbox"
                    name ="coding"
                    checked = {interests.includes("coding")}
                    onChange={handleDataChange}
                />
                Coding
            </label>
        </div>

        <div>
            <label>
                <input 
                    type="checkbox"
                    name ="music"
                    checked = {interests.includes("music")}
                    onChange={handleDataChange}
                />
                Music
            </label>
        </div>

        <div>
            <label>
                <input 
                    type="checkbox"
                    name ="football"
                    checked = {interests.includes("football")}
                    onChange={handleDataChange}
                />
                Football
            </label>
        </div>
        {errors.interests && <span className='error'> {errors.interests}</span>}

    </div>
  )
}

export default Interest