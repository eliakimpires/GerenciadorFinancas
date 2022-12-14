import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Welcome from        '../PagesLogin/Welcome'
import SignIn from         '../PagesLogin/SignIn'
import Register from       '../PagesLogin/Register'
import ForgetPassword from '../PagesLogin/ForgetPassword'

import Home from        "../PagesAfterLogin/Home";
import Detail from      "../PagesAfterLogin/Detail";
import Information from "../PagesAfterLogin/Information";
import Profile from     "../PagesAfterLogin/Profile";
import Settings from    "../PagesAfterLogin/Settings";
import DRE from         "../PagesAfterLogin/DRE";
import Invoicing from   "../PagesAfterLogin/Invoicing";
import Financas from    "../PagesAfterLogin/Financas";

import Courses from '../PagesAfterLogin/GerenciarCustos/MaoDeObra/CadastrarMaoDeObra';
import CreateUserScreen from "../PagesAfterLogin/GerenciarCustos/InvestimentoFixo/CreateUserScreen";
import UserDetailScreen from "../PagesAfterLogin/GerenciarCustos/InvestimentoFixo/UserDetailScreen";
import UsersList from "../PagesAfterLogin/GerenciarCustos/InvestimentoFixo/UsersList";

import GerenciarCustos from  "../PagesAfterLogin/GerenciarCustos";
import InvestimentoFixo from "../PagesAfterLogin/GerenciarCustos/InvestimentoFixo";
import CustoFixo from        "../PagesAfterLogin/GerenciarCustos/CustoFixo";
import MaoDeObra from        "../PagesAfterLogin/GerenciarCustos/MaoDeObra";
import CustosVariaveis from  "../PagesAfterLogin/GerenciarCustos/CustosVariaveis";

import CadastrarInvestimentoFixo from "../PagesAfterLogin/GerenciarCustos/InvestimentoFixo/CadastrarInvestimentoFixo";
import CadastrarCustoFixo from        "../PagesAfterLogin/GerenciarCustos/CustoFixo/CadastrarCustoFixo";
import CadastrarMaoDeObra from        "../PagesAfterLogin/GerenciarCustos/MaoDeObra/CadastrarMaoDeObra";
import CadastrarCustosVariaveis from  "../PagesAfterLogin/GerenciarCustos/CustosVariaveis/CadastrarCustosVariaveis";

import GerenciarFaturamento from   "../PagesAfterLogin/GerenciarFaturamento";
import Estoque from                "../PagesAfterLogin/GerenciarFaturamento/Estoque";
import VendasPrazo from            "../PagesAfterLogin/GerenciarFaturamento/VendasPrazo";
import VendasProdutosServicos from "../PagesAfterLogin/GerenciarFaturamento/VendasProdutosServicos";

import CadastrarEstoque from                "../PagesAfterLogin/GerenciarFaturamento/Estoque/CadastrarEstoque";
import CadastrarVendasPrazo from            "../PagesAfterLogin/GerenciarFaturamento/VendasPrazo/CadastrarVendasPrazo";
import CadastrarVendasProdutosServicos from "../PagesAfterLogin/GerenciarFaturamento/VendasProdutosServicos/CadastrarVendasProdutosServicos";

import Select from '../PagesAfterLogin/GerenciarCustos/InvestimentoFixo/Select';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    logo:{
        width: 140,
        height: 50,
        marginLeft: '35%',
    }
})
export default function Routes({navigation}){
return(
    <Stack.Navigator>
        <Stack.Screen //--------------------------------------------------- P??GINAS DE LOGIN ------------------------------------------------------
            name="Welcome"
            component={Welcome}
            options={{ headerShown:false }}
        />
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown:false }}
        />
        <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown:false }}
        />
        <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{ headerShown:false }}
        />
        <Stack.Screen   //--------------------------------------------------- P??GINA PRINCIPAL ------------------------------------------------------
            name="Home" 
            component={Tabs} 
            options={{title: "",
            headerBackVisible:false ,
            headerStyle: {backgroundColor: '#5CC6BA'},
            headerTintColor:'#101010',
            headerLeft: () => (
                <Image style={styles.logo} source={{
                    uri: 'https://i.imgur.com/KkYIb6u.png',
                  }}/>
            )}}
        />
        <Stack.Screen //--------------------------------------------------- P??GINAS GERENCIAR CUSTOS ------------------------------------------------------
            name="Gerenciar Custos" 
            component={GerenciarCustos} 
            options={{title: "Gerenciar Custos",
            headerBackVisible:true ,
            headerStyle: {backgroundColor: '#fff'},
            headerTintColor:'#5CC6BA',
            headerTitleStyle: {fontWeight: '500', fontSize: 22, color: '#717F7F'}
        
        }}
            
        />
        <Stack.Screen 
            name="Investimento fixo" 
            component={InvestimentoFixo} 
            
        />
        <Stack.Screen 
            name="Cadastrar investimento fixo" 
            component={CadastrarInvestimentoFixo} 
        />
        <Stack.Screen  
            name="Custo fixo" 
            component={CustoFixo} 
        />
        <Stack.Screen 
            name="Cadastrar custo fixo" 
            component={CadastrarCustoFixo} 
        />
        <Stack.Screen 
            name="Custos com m??o de obra" 
            component={MaoDeObra} 
        />
        <Stack.Screen 
            name="Cadastrar m??o de obra" 
            component={CadastrarMaoDeObra} 
        />
        <Stack.Screen 
            name="Custos vari??veis" 
            component={CustosVariaveis} 
        />
        <Stack.Screen 
            name="Cadastrar custos vari??veis" 
            component={CadastrarCustosVariaveis} 
        />
        <Stack.Screen 
            name="Select cadastrar investimento fixo" 
            component={Select} 
            
        />
        <Stack.Screen //--------------------------------------------------- P??GINAS GERENCIAR FATURAMENTO ------------------------------------------------------
            name="Gerenciar Faturamento" 
            component={GerenciarFaturamento}
            options={{title: "Gerenciar Faturamento",
            headerBackVisible:true ,
            headerStyle: {backgroundColor: '#fff'},
            headerTintColor:'#5CC6BA',
            headerTitleStyle: {fontWeight: '500', fontSize: 22, color: '#717F7F'}}} 
        />
        <Stack.Screen 
            name="Estoque" 
            component={Estoque} 
        />
        <Stack.Screen 
            name="Cadastrar estoque" 
            component={CadastrarEstoque} 
        />
        <Stack.Screen 
            name="Vendas a prazo" 
            component={VendasPrazo} 
        />
        <Stack.Screen 
            name="Cadastrar vendas a prazo" 
            component={CadastrarVendasPrazo} 
        />
        <Stack.Screen 
            name="Vendas de produtos e servi??os" 
            component={VendasProdutosServicos} 
        />
        <Stack.Screen 
            name="Cadastrar vendas de produtos e servi??os" 
            component={CadastrarVendasProdutosServicos} 
        />
        <Stack.Screen //--------------------------------------------------- OUTRAS P??GINAS ------------------------------------------------------
            name="Profile" 
            component={Profile} 
        />
        <Stack.Screen 
            name="Settings" 
            component={Settings} 
        />
        <Stack.Screen 
            name="DRE" 
            component={DRE} 
        />
        <Stack.Screen 
            name="Faturamento" 
            component={Invoicing} 
        />


        <Stack.Screen //--------------------------------------------------- P??GINAS N??O FUNCIONAIS ------------------------------------------------------
            name="Finan??as" 
            component={Financas} 
        />
        <Stack.Screen 
            name="Curso" 
            component={Courses} 
        />
        <Stack.Screen
            name="UsersList"
            component={UsersList}
            options={{ title: "Investimento Fixo",
            headerBackVisible:true ,
            headerStyle: {backgroundColor: '#fff'},
            headerTintColor:'#5CC6BA',
            headerTitleStyle: {fontWeight: '500', fontSize: 22, color: '#717F7F'}}}
        />
        <Stack.Screen
            name="CreateUserScreen"
            component={CreateUserScreen}
            options={{ title: "Cadastrar Investimento Fixo",
            headerBackVisible:true ,
            headerStyle: {backgroundColor: '#fff'},
            headerTintColor:'#5CC6BA',
            headerTitleStyle: {fontWeight: '500', fontSize: 20, color: '#717F7F'}}}
        />
        <Stack.Screen
            name="UserDetailScreen"
            component={UserDetailScreen}
            options={{ title: "Users details" }}
        />
    </Stack.Navigator>
    )
} //------------------------------------------------------- P??GINAS DE NAVEGA????O CANTO INFERIOR----------------------------------------------------------------------------------------

function Tabs(){
  return(
    <Tab.Navigator initialRouteName="Principal">
      <Tab.Screen 
        name="Informa????o" 
        component={Information}
        options={{
          headerShown: false,
          tabBarIcon:({ color, size }) => (
            <MaterialCommunityIcons name="help-box" color={color} size={size} />), 
        }}
      />
      <Tab.Screen 
        name="Principal" 
        component={Home}
        options={{ 
          headerShown:false, 
          tabBarIcon:({ color, size }) => ( 
            <MaterialCommunityIcons name="menu" color={color} size={size} />), 
        }}
      />
      <Tab.Screen 
        name="Encerrar sess??o" 
        component={Detail}
        options={{
            headerShown: false,
        tabBarIcon:({ color, size }) => (
          <MaterialCommunityIcons name="exit-to-app" color={color} size={size}  />
          
          
          )
          
      }}
      
      />
    </Tab.Navigator>
  )
}
