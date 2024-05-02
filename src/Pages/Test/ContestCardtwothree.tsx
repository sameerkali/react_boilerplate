import { useEffect, useState } from 'react';

const ContestCardtwothree = () => {
  const [numberr, setNumberr] = useState('0');
  const [number, setNumber] = useState('');
  const [fetchedData, setFetchedData] = useState<any>(null);

  const handleAddMeIn = () => {
    setNumber(numberr);
  };


  return (
    <div>
      <p>This is number: {number}</p>
      <p>Call the API data here: {JSON.stringify(fetchedData)}</p>

      <div style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', paddingTop: '2%', width: '90%', alignSelf: 'center', borderRadius: 5, marginVertical: '2%' }}>
        <input
          style={{ padding: 12, color: '#1E3A8A' }}
          type="number"
          value={numberr}
          onChange={e => setNumberr(e.target.value)}
        />
      </div>

      <div style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 1,  borderColor: '#E5E5E5' }}>
        <button
          onClick={handleAddMeIn}
          style={{ backgroundColor: '#1E3A8A', color: '#ffffff', padding: 10, borderRadius: 5 }}>
          Add me in
        </button>
      </div>
    </div>
  );
};

export default ContestCardtwothree;
