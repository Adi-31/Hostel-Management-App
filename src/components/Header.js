import { View, Text , StyleSheet} from "react-native";
import { SIZES } from "../constants/theme";
import { CircleButton } from "./Button";

const Header = () => {
  return (
    <View
      style={styles.container}
    >
      {/* left side text  */}
      <View style={styles.leftsideview} >
        <Text style={styles.leftsidetext1}>
          Good Morning
        </Text>
        <Text style={styles.leftsidetext2}>
          Anna
        </Text>
      </View>
      {/* profile icon  */}
      <View
        style={styles.profileiconview}
      >
        <CircleButton />
      </View>
    </View>
  );
};

export default Header;

const styles= StyleSheet.create({
  container : { flexDirection: "row", height: 75, backgroundColor: "#3358F9",},
  leftsideview : { flex: 1,  marginLeft: 10, padding: 10,},
  leftsidetext1 : { fontSize: SIZES.medium, color: "white", opacity: 0.5 },
  leftsidetext2 : { fontSize: SIZES.large * 2,color: "white", fontWeight: "bold"},
  profileiconview : {flex: 1, alignItems: "space-between", justifyContent: "center",marginRight: 10,}
})
