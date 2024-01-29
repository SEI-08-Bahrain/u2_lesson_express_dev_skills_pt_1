const bands = [
    {id: 125223, name: 'Sleep Token', done: true},
    {id: 127904, name: 'Bad Omens', done: false},
    {id: 139608, name: 'Motionless in White', done: false}
  ];
 
 
  const getAll = () => {
    return bands;
  }

  const getOne = (id) => {
    return bands.find(band => band.id === parseInt(id));
  }
 
  module.exports = {
    getAll, getOne
  };
  