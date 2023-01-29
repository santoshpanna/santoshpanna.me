import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';

const IndexPage = (props: any) => {
  const router = useRouter();

  console.log("props == ", props)
  return (
    <>
      <NextSeo
        title="Santosh Panna"
      />
      <h1>Hello</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. In cursus turpis massa tincidunt dui ut ornare lectus. Nec nam aliquam sem et tortor consequat id porta. Sagittis nisl rhoncus mattis rhoncus. Integer vitae justo eget magna fermentum iaculis eu. Viverra vitae congue eu consequat ac felis donec et odio. Enim facilisis gravida neque convallis. Elit eget gravida cum sociis natoque penatibus. Vitae sapien pellentesque habitant morbi tristique senectus. Semper viverra nam libero justo laoreet sit amet cursus. Etiam erat velit scelerisque in dictum non. Faucibus interdum posuere lorem ipsum dolor.
        </p>
        <br /><br /><br />
        <p>
          Egestas dui id ornare arcu odio ut sem nulla pharetra. Ac auctor augue mauris augue neque gravida in fermentum. Posuere sollicitudin aliquam ultrices sagittis orci. Sagittis vitae et leo duis ut diam. Quam pellentesque nec nam aliquam. Odio tempor orci dapibus ultrices in iaculis nunc sed. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. In hac habitasse platea dictumst vestibulum rhoncus est. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Duis convallis convallis tellus id. Nibh cras pulvinar mattis nunc. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Fringilla est ullamcorper eget nulla facilisi etiam. Enim sed faucibus turpis in. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Justo eget magna fermentum iaculis eu non. Massa enim nec dui nunc mattis. Eget sit amet tellus cras adipiscing enim eu turpis.
        </p>
        <br /><br /><br />
        <p>
          Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque purus semper eget duis at tellus at urna. Lacus sed viverra tellus in hac. Quam pellentesque nec nam aliquam sem et. Pretium nibh ipsum consequat nisl. Id diam maecenas ultricies mi eget mauris. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Nullam ac tortor vitae purus faucibus ornare suspendisse. Blandit volutpat maecenas volutpat blandit aliquam etiam. Adipiscing at in tellus integer feugiat. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Id aliquet risus feugiat in. Varius quam quisque id diam vel quam elementum.
        </p>
        <br /><br /><br />
        <p>
          Massa tincidunt dui ut ornare lectus sit amet est. Sed blandit libero volutpat sed cras ornare. Sed euismod nisi porta lorem mollis aliquam. Nunc mi ipsum faucibus vitae aliquet nec. Accumsan lacus vel facilisis volutpat est. Nunc pulvinar sapien et ligula. Sit amet est placerat in egestas erat imperdiet sed. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Eget felis eget nunc lobortis mattis aliquam. Varius morbi enim nunc faucibus a pellentesque sit amet. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Vestibulum lorem sed risus ultricies tristique. Sed elementum tempus egestas sed sed. Tellus orci ac auctor augue mauris augue neque gravida in. Dictum non consectetur a erat nam. Elit eget gravida cum sociis natoque penatibus. Dui id ornare arcu odio ut sem nulla pharetra diam. Velit scelerisque in dictum non.
        </p>
        <br /><br /><br />
        <p>
          Scelerisque eleifend donec pretium vulputate sapien nec. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. In aliquam sem fringilla ut. Mattis rhoncus urna neque viverra. Urna porttitor rhoncus dolor purus non enim. Sapien nec sagittis aliquam malesuada bibendum arcu. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Hac habitasse platea dictumst quisque sagittis purus. Gravida neque convallis a cras. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. In nibh mauris cursus mattis molestie.
        </p>
      </div>
    </>
  )
}

export default IndexPage;
