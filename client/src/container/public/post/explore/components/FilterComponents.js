import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Select, Row, Col } from "antd";
import { PrimaryButton } from "../../../../components";
import * as mapDispatchToProps from "../actions";
import { createStructuredSelector } from "reselect";
import { selectCategories } from "../selectors";

const FilterComponents = ({ getCategories, categories, setValue }) => {
  const sortOptions = [
    {
      title: "Latest First",
      indexValue: "createdAt",
      order: -1,
    },
    {
      title: "Oldest First",
      indexValue: "createdAt",
      order: 1,
    },
    {
      title: "Most Popular",
      indexValue: "points",
      order: -1,
    },
  ];

  useEffect(() => {
    getCategories();
  }, []);

  const handleSortSelect = (_, selectProps) => {
    const { indexValue, order } = selectProps;
    let sort = {
      [indexValue]: order,
    };
    setValue({
      key: "query",
      index: "sort",
      value: sort,
    });
  };

  const handleCategorySelect = (value) => {
    let search = {
      searchField: "category",
      searchValue: value,
    };
    setValue({
      key: "query",
      index: "search",
      value: search,
    });
  };

  return (
    <>
      <Row gutter={[12, 12]}>
        <Col flex={2}>
          <Select
            onSelect={handleSortSelect}
            placeholder="Sort By"
            style={{ width: 170 }}
          >
            {sortOptions.map((sort, index) => {
              return (
                <Select.Option
                  key={`${sort.title}-${sort.indexValue}-${sort.order}-${index}`}
                  order={sort.order}
                  value={sort.title}
                  indexValue={sort.indexValue}
                >
                  {sort.title}
                </Select.Option>
              );
            })}
          </Select>
        </Col>
        <Col flex={2}>
          <Select
            style={{ float: "right", width: 170 }}
            listItemHeight={10}
            listHeight={250}
            showSearch
            placeholder="Select a category"
            optionFilterProp="children"
            onSelect={handleCategorySelect}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {categories.map((categ, index) => (
              <Select.Option
                style={{ fontSize: 20 }}
                value={categ.categoryName}
                key={`post-category-${categ._id}-${index}`}
              >
                {categ.categoryName}
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponents);
