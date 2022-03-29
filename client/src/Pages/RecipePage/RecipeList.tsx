import { useState, useEffect } from 'react';
import axios from 'axios';
import Waves from '../../Components/Waves';
import {
  Body,
  Category,
  CategoryButtons,
  CategoryDescription,
  Filter,
  FilterButtons,
  SectionDivider,
  RecipeLists,
  RecipeCards,
  TopButtonSection,
} from './RecipeList.style';
import { TopButton } from '../../Components/TopButton';

axios.defaults.withCredentials = true;

const categoryName: Array<any> = [
  '전체보기',
  '인기순',
  '해시태그',
  '베이스 드링크',
];
const subFilterName: Array<any> = [
  [
    '달달한',
    '청량한',
    '드라이한',
    '트로피칼',
    '커피',
    '무알콜',
    '편의점레시피',
  ],
  ['샴페인', '꼬냑', '진', '럼', '테낄라', '보드카', '위스키', '기타'],
];

interface RecipeListDataType {
  requestedCategoryBtn: string;
  isFilterOpened: string;
  description: string;
}

//! 레시피 리스트 페이지
// console.log('브라우저 너비', document.body.offsetWidth);
const RecipeListPage = function RecipeList() {
  const [categoryBtn, setCategoryBtn] = useState<RecipeListDataType>({
    requestedCategoryBtn: '/',
    isFilterOpened: '',
    description: '저희 서비스의 모든 칵테일 레시피를 조회할 수 있습니다.',
  });
  const [nowRecipeListResult, setNowRecipeListResult] = useState<any>([]);
  const [isClickedTags, setIsClickedTags] = useState<any>([]);
  // console.log('아무것도 선택 안 했을 때', isClickedTags);
  useEffect(() => {
    recipeResult();
  }, [categoryBtn.requestedCategoryBtn]);

  //! RecipeList 기본 렌더: 전체보기 조회
  const recipeResult = async function (): Promise<any> {
    const strClickedTags = isClickedTags.join('&tag=');
    await axios
      .get(
        `http://localhost:3001/recipe/${categoryBtn.requestedCategoryBtn}${strClickedTags}`
      )

      .then((info) => {
        //! Recipe 카드 TAG 갯수 3개로 제한
        const result = info.data.data;
        // console.log('result', result);
        for (let i = 0; i < result.length; i += 1) {
          if (result[i].tags.length >= 3) {
            result[i].tags = result[i].tags.splice(0, 3);
          }
        }
        setNowRecipeListResult(result);
      })
      .catch((err) => {
        console.log('에러', err);
      });
  };

  //! 카테고리 버튼 만드는 함수
  const MakeCategoryBtn = function (categoryName: any): any {
    const [prePicked, setPrePicked] = useState('전체보기');

    //! 카테고리 버튼 작동 함수
    const setCategoryBtns = function (e: any): any {
      const nowPicked = e.target.innerHTML;

      if (!nowPicked.includes('✨')) {
        if (prePicked !== nowPicked) {
          const prePickedBtn = document.getElementById(prePicked);
          prePickedBtn!.style.background = '#ffffff';
          prePickedBtn!.textContent = prePicked;
          setPrePicked(nowPicked);
        }
        e.target.textContent = '✨'.concat(nowPicked).concat('✨');
        e.target.style.background = '#94FDD7';

        if (nowPicked === '전체보기') {
          setCategoryBtn({
            requestedCategoryBtn: '',
            isFilterOpened: '',
            description:
              '저희 서비스의 모든 칵테일 레시피를 조회할 수 있습니다.',
          });
        } else if (nowPicked === '인기순') {
          setCategoryBtn({
            requestedCategoryBtn: 'like',
            isFilterOpened: '',
            description:
              '현재 시간 가장 인기 많은 칵테일부터 조회할 수 있습니다.',
          });
        } else if (nowPicked === '해시태그') {
          setCategoryBtn({
            requestedCategoryBtn: 'tag?tag=',
            isFilterOpened: `${nowPicked}`,
            description:
              '칵테일이 처음이라면, 원하는 태그를 통해 가장 잘 맞는 칵테일을 찾아보세요',
          });
        } else if (nowPicked === '베이스 드링크') {
          setCategoryBtn({
            requestedCategoryBtn: 'tag?tag=',
            isFilterOpened: `${nowPicked}`,
            description:
              '다양한 베이스 드링크를 통해 나에게 잘 맞는 칵테일을 찾아보세요',
          });
        }
      } else if (nowPicked.includes('✨')) {
        e.target.textContent = nowPicked.slice(1, -1);
        e.target.style.background = '#ffffff';
      }
    };

    return categoryName.map(function (el: string, index: number): any {
      return (
        <CategoryButtons
          id={categoryName[index]}
          key={categoryName[index]}
          onClick={(e: any) => setCategoryBtns(e)}
          style={{
            background:
              categoryName[index] === '전체보기' ? '#94FDD7' : '#ffffff',
          }}
        >
          {categoryName[index] === '전체보기'
            ? '✨전체보기✨'
            : categoryName[index]}
        </CategoryButtons>
      );
    });
  };

  //! 필터 버튼 만드는 함수
  const MakeFilterBtn = function (subFilterNameList: Array<string>): any {
    // const isPickedFilterName: Array<string> = [];
    const isPickedFilterName = isClickedTags;

    const setFilterBtns = function (e: any): any {
      const pickedFilterName = e.target.innerHTML;

      if (!pickedFilterName.includes('💛')) {
        e.target.textContent = '💛'.concat(pickedFilterName);
        e.target.style.background = '#CB77FF';
        e.target.style.color = '#ffffff';

        isPickedFilterName.push(pickedFilterName);
      } else if (pickedFilterName.includes('💛')) {
        e.target.textContent = pickedFilterName.slice(2);
        e.target.style.background = '#ffffff';
        e.target.style.color = '#494949';

        for (let i = 0; i < isPickedFilterName.length; i += 1) {
          if (isPickedFilterName[i].includes(pickedFilterName.slice(2))) {
            isPickedFilterName.splice(i, 1);
          }
        }
      }

      setIsClickedTags(isPickedFilterName);
      recipeResult();
    };
    return subFilterNameList.map(function (el: string, index: number): any {
      return (
        <FilterButtons
          id={subFilterNameList[index]}
          key={subFilterNameList[index]}
          onClick={(e: any) => setFilterBtns(e)}
        >
          {el}
        </FilterButtons>
      );
    });
  };

  const moveToTheTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Waves />
      <Body>
        <Category>{MakeCategoryBtn(categoryName)}</Category>
        <CategoryDescription>{categoryBtn.description}</CategoryDescription>
        <Filter>
          {categoryBtn.isFilterOpened === '해시태그'
            ? MakeFilterBtn(subFilterName[0])
            : categoryBtn.isFilterOpened === '베이스 드링크'
            ? MakeFilterBtn(subFilterName[1])
            : ''}
        </Filter>
        <SectionDivider section />
        <RecipeLists>
          {nowRecipeListResult.map(function (el: any) {
            return (
              <RecipeCards key={el.id}>
                <img alt={el.name} src={el.image} />
                <div className="RecipeDescription">
                  <div className="NameAndLikes">
                    <div>{el.name}</div>
                    <div>
                      <i className="heart icon" style={{ color: '#FFDF00' }} />
                      {el.likeCount}
                    </div>
                  </div>
                  <div className="RcipeTags">
                    {el.tags.map(function (tag: string) {
                      return (
                        <button key={tag} type="button">
                          {'#'.concat(tag)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </RecipeCards>
            );
          })}
        </RecipeLists>
        <TopButtonSection>
          <TopButton
            onClick={() => {
              moveToTheTop();
            }}
          >
            UP
          </TopButton>
        </TopButtonSection>
      </Body>
    </>
  );
};

export default RecipeListPage;
