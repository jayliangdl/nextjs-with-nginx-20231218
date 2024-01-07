import { useEffect,useState } from "react";
import { Tabs } from 'antd-mobile'
export default function Oversea(initProps){
  
  const [customerData,setCustomerData] = new useState([]);
  useEffect(() => {
    console.log('mounted');
    getCustomerData().then(data=>{
      setCustomerData(data);
    });
  }, []);
  const listItems = initProps.menu.map(menu=>
    // <li>
    //   <p>{menu.menuName}</p>
    // </li>
    <Tabs.Tab title={menu.menuName} key={menu.menuName}>
    {menu.menuName}
    </Tabs.Tab>
  )

  return (
    <>
    <Tabs>
          {/* <Tabs.Tab title='水果' key='fruits'>
            菠萝
          </Tabs.Tab>
          <Tabs.Tab title='蔬菜' key='vegetables'>
            西红柿
          </Tabs.Tab>
          <Tabs.Tab title='动物' key='animals'>
            蚂蚁
          </Tabs.Tab> */}
          {listItems}
    </Tabs>
    {/* <b>菜单资料</b>：{initProps.menu ? (<ul>{listItems}</ul>) : (<div>No menu data</div>)} */}
    <b>顾客资料</b>：{customerData ? (<div><p>{customerData.name}（ada:{customerData.ada}）</p></div>) : (<div>No customer data</div>)}
    </>
  )
}

async function getCustomerData(){
  console.log('Get customer data');
  const customer = await loadData('https://mockdata-for-amall-default-rtdb.firebaseio.com/customer.json');
  return customer;
}


function loadData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const firstKeyData = Object.values(data)[0];
      return firstKeyData.data; // 返回处理后的数据
    });
}


export async function getStaticProps(){
  try{
    console.log('Refresh menu data');
    const menu = await loadData('https://mockdata-for-amall-default-rtdb.firebaseio.com/menu.json');
    return {
      props:{
        'menu':menu
      },
      revalidate: 60, // 1分钟
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        menu: []
      },
      revalidate: 60
    };
  }
}

