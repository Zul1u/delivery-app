const setUserInfosStorage = (infos) => {
  localStorage.setItem('userInfos', JSON.stringify(infos));
};

const getUserInfosStorage = () => JSON.parse(localStorage.getItem('userInfos'));

export { getUserInfosStorage, setUserInfosStorage };
